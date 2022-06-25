// initialization
patches = {};
console.debug("Loaded Patches");

// put patches
patches["Bugged Level Data"] = false;
let zpkPatches = ["BehaviourData", "EditorData", "CollisionData", "CameraData", "LayerData", "LevelData", "ObjectData", "ObjectPosition", "PathData", "ProjectData", "TileData", "TileSelectorData"]
zpkPatches.forEach(function(ZName) {
  patches[ZName + " Z_MAX Too Low"] = false;
});

// diagnose
this.commands = [];
let main = this;
this.diagnose = function diagnose() {
  return new Promise(function(resolve) {
    console.debug("Diagnosing");
    document.getElementById("patchFixText").innerHTML = "Diagnosing Vulnerabilites...";
    
    // check ZPKs that are too low
    let ZPKChecks = {};
    zpkPatches.forEach(function(ZName) {
      ZPKChecks[ZName] = 0;
      let cmd = "select Z_PK from Z" + ZName;
      try {
        let index = db.exec(cmd);
        index[0].values.forEach(function(value) {
          ZPKChecks[ZName] = Math.max(value[0], ZPKChecks[ZName]);
        });
      } catch(e){}
    });
    let ZMax = db.exec("select z_max from z_primarykey")[0];
    let actualZMax = {};
    let zi = 0;
    ZMax.columns.forEach(function(column) {
      actualZMax[column] = ZMax.values[zi][0]
      zi++;
    });
    zpkPatches.forEach(function(name) {
      if (actualZMax[name] < ZPKChecks[name]) {
        main.commands.push("update z_primarykey set Z_MAX = " + ZPKChecks[name] + " where Z_NAME = " + JSON.stringify(name));
        patches[name + " Z_MAX Too Low"] = true;
      }
    });
    
    // look for bugged scenes
    try {
      let scenes = db.exec("SELECT zindex, z_pk, zscenetype from zleveldata")[0];
      let indexes = [];
      let zpks = [];
      let scenetypes = [];
      scenes.values.forEach(function(index) {
        indexes.push(index[0]);
        zpks.push(index[1]);
        scenetypes.push(index[2]);
      });
      let indexesDict = {};
      let sceneIndex = 0;
      indexes.forEach(function(val) {
        if (indexesDict[val + "-" + scenetypes[sceneIndex]]) {
          patches["Bugged Level Data"] = true;
          let found = false;
          while (!found) {
            val++;
            if (!indexesDict[val + "-" + scenetypes[sceneIndex]]) {
              found = true;
            }
          }
          indexes[sceneIndex] = val;
          indexesDict[val +  "-" + scenetypes[sceneIndex]] = true;
          let zpkChange = zpks[sceneIndex];
          main.commands.push("update zleveldata set zindex = " + val + " where ZPK = " + zpkChange);
        }
        indexesDict[val + "-" + scenetypes[sceneIndex]] = true;
        sceneIndex++;
      });
    } catch(e) {};
      
    main.execPatch = fixPatch;
    console.debug("Done Diagnosing");
    resolve(patches);
  });
}

// patch
var fixPatch = function() {
  let count = 0;
  let errors = 0;
  this.commands.forEach(function() {
    count++;
    try {
      db.run(cmd);
    } catch(e) {
      errors++;
    };
  });
  throwSuccess("PATCHED - Successfully executed " + (count - errors) + " out of " + count + " modifications");
}
