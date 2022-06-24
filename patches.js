// initialization
patches = {};
console.debug("Loaded Patches");

// put patches
let zpkPatches = ["BehaviourData", "EditorData", "CollisionData", "CameraData", "LayerData", "LevelData", "ObjectData", "ObjectPosition", "PathData", "ProjectData", "TileData", "TileSelectorData"]
zpkPatches.forEach(function(ZName) {
  patches[ZName + " ZPK Maximum Too Low"] = false;
});
patches["Duplicate Scenes Found"] = false;
patches["Ghost Objects Found"] = false;
patches["Ghost Behaviors Found"] = false;

// diagnose
this.commands = [];
this.diagnose = function diagnose() {
  let main = this;
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
      }
    });
      
    main.execPatch = fixPatch;
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
