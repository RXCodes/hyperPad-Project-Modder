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
exports.diagnose = function diagnose() {
  console.debug("Diagnosing");
  document.getElementById("patchFixText").innerHTML = "Diagnosing Vulnerabilites...";
}
