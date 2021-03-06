// initialization
patches = {};
console.debug("Loaded Patches");

// put patches
patches["Bugged Level ID"] = false;
patches["Bugged Scene Background"] = false;
patches["Layers in Wrong Scenes"] = false;
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
          patches["Bugged Level ID"] = true;
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
          let name = db.exec("select zlevelname from zleveldata where Z_PK = " + zpkChange)[0].values[0];
          name = JSON.stringify(name + " (Fixed)")
          main.commands.push("update zleveldata set zindex = " + val + " where Z_PK = " + zpkChange);
          main.commands.push("update zleveldata set zlevelname = " + name + " where Z_PK = " + zpkChange);
        }
        indexesDict[val + "-" + scenetypes[sceneIndex]] = true;
        sceneIndex++;
      });
    } catch(e) {};
    
    // look for weird background
    try {
      let scenes = db.exec("SELECT zcamera, z_pk, zscenetype from zleveldata")[0];
      let indexes = [];
      let zpks = [];
      scenes.values.forEach(function(index) {
        if (index[2] == 1) {
          return;
        }
        indexes.push(index[0]);
        zpks.push(index[1]);
        
        let bg = db.exec("select zopacity from zcameradata where zlevel = " + index[0]);
        let val = 1;
        try {
          val = bg[0].values[0][0];
        } catch(e) {}
        if (val !== 1) {
          if (bg[0].values[0] !== 0) {
            patches["Bugged Scene Background"] = true;
            main.commands.push("update zcameradata set zopacity = 1 where zlevel = " + index[0]);
          }
        }
        
      });
    } catch(e) {};
    
    // look for invalid layers
    try {
      let data = db.exec("SELECT * from zlayerdata");
      let levels = {};
      let columns = data[0].columns;
      data[0].values.forEach(function(row) {
        let lvl = row[columns.indexOf("ZLEVEL")];
        let index = row[columns.indexOf("ZINDEX")];
        let alias = lvl + "-" + index;
        if (levels[alias]) {
          lvl++;
          patches["Layers in Wrong Scenes"] = true;
          let zpk = row[columns.indexOf("Z_PK")];
          main.commands.push("update zlayerdata set zlevel = " + lvl + " where z_pk = " + zpk);
        }
        levels[alias] = true;
      });
    } catch(e) {}
    
    // finish diagnosis  
    main.execPatch = fixPatch;
    console.debug("Done Diagnosing");
    resolve(patches);
  });
}

// patch
var fixPatch = function() {
  let count = 0;
  let errors = 0;
  this.commands.forEach(function(cmd) {
    count++;
    try {
      db.run(cmd);
    } catch(e) {
      errors++;
    };
  });
  throwSuccess("PATCHED - Successfully executed " + (count - errors) + " out of " + count + " modifications");
}
