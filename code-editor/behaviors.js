var systemExperimental = false;
Object.defineProperty(self, "experimental", {
  get: function() {
    console.debug("EXPERIMENTAL MODE ENABLED: modifications will not affect project");
    systemExperimental = true;
  }
})

function _behaviorFunctionHandler() {
  this.action = undefined;
  this.results = {};
 
  // scope methods
  this.withName = function(name) {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    let self = this;
    Object.keys(self.results).forEach(function(behavior) {
      if (behavior !== name) {
        delete self.results[behavior];
      }
    });
    return this;
  };
  this.includesName = function(name) {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    let self = this;
    Object.keys(self.results).forEach(function(behavior) {
      if (!behavior.includes(name)) {
        delete self.results[behavior];
      }
    });
    return this;
  };
  this.notIncludeName = function(name) {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    let self = this;
    Object.keys(self.results).forEach(function(behavior) {
      if (behavior.includes(name)) {
        delete self.results[behavior];
      }
    });
    return this;
  };
  this.categoryOf = function(category) {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    let self = this;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      if (data.ZACTIONS.behaviourCategory !== category) {
        delete self.results[behavior];
      }
    });
    return this;
  };
  this.notCategoryOf = function(category) {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    let self = this;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      if (data.ZACTIONS.behaviourCategory == category) {
        delete self.results[behavior];
      }
    });
    return this;
  };
  this.typeOf = function(type) {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    let self = this;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      if (data.ZNAME !== type) {
        delete self.results[behavior];
      }
    });
    return this;
  };
  this.notTypeOf = function(type) {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    let self = this;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      if (data.ZNAME == type) {
        delete self.results[behavior];
      }
    });
    return this;
  };
  this.objectOf = function(objectName) {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    let self = this;
    let zpks = self.objectZPKs;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      if (zpks[data.ZOBJECT].ZNAME !== objectName) {
        delete self.results[behavior];
      }
    });
    return this;
  };
  this.notObjectOf = function(objectName) {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    let self = this;
    let zpks = self.objectZPKs;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      if (zpks[data.ZOBJECT].ZNAME == objectName) {
        delete self.results[behavior];
      }
    });
    return this;
  };
  this.isEnabled = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    let self = this;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      if (!data.ZACTIONS.active) {
        delete self.results[behavior];
      }
    });
    return this;
  };
  this.isDisabled = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    let self = this;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      if (data.ZACTIONS.active) {
        delete self.results[behavior];
      }
    });
    return this;
  };
  this.includeChildren = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    let self = this;
    let ztags = this.ztags;
    let iterated = {};
    
    function check(ztag) {
      if (iterated[ztag]) {
        return;
      }
      iterated[ztag] = true;
      if (!ztags[ztag]) {
        return;
      }
      let behavior = ztags[ztag].ZACTIONS.alias;
      self.results[behavior] = ztags[ztag];
      let data = self.results[behavior];
      let outputs = data.ZACTIONS.outputs || [];
      outputs.forEach(function(ztag) {
        check(ztag);
      });
    }
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      check(data.ZTAG);
    });
    return this;
  };
  this.withZPK = function(zpk) {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    let self = this;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      if (data.ZPK !== zpk) {
        delete self.results[behavior];
      }
    });
    return this;
  };
  this.isRoot = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    let self = this;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      if (!data.ZISROOT) {
        delete self.results[behavior];
      }
    });
    return this;
  };
  this.isNotRoot = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    let self = this;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      if (data.ZISROOT) {
        delete self.results[behavior];
      }
    });
    return this;
  };
  this.global = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    let self = this;
    let zpks = self.objectZPKs;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      if (zpks[data.ZOBJECT].ZNAME !== "world") {
        delete self.results[behavior];
      }
    });
    return this;
  };
  this.notGlobal = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    let self = this;
    let zpks = self.objectZPKs;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      if (zpks[data.ZOBJECT].ZNAME == "world") {
        delete self.results[behavior];
      }
    });
    return this;
  };
  
  // get data from behaviors
  this.getInputNames = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    let outputs = {};
    let self = this;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      Object.keys(data.ZACTIONS).forEach(function(field) {
        let inputData = data.ZACTIONS[field] || {};
        if (inputData.value !== undefined && inputData.controlledBy !== undefined) {
          outputs[field] = inputData;
        }
      });
    });
    return Object.keys(outputs);
  };
  this.inputOf = function(input) {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    let outputs = [];
    let self = this;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      let inputData = data.ZACTIONS[input] || {};
      if (inputData.value !== undefined && inputData.controlledBy !== undefined) {
        outputs.push(inputData);
      }
    });
    if (outputs.length = 0) {
      return {};
    }
    if (outputs.length == 1) {
      return outputs[0];
    } else {
      return outputs;
    }
  };
  
  // copy behaviors in search
  this.copy = function(alias) {
    let startTime = Date.now();
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    this.action = "copy";
    if (!alias) {
      console.error("Copy failed: Alias is not defined!");
      return this;
    }
    this.clipboards[alias] = this.results;
    let deltaTime = Date.now() - startTime;
    console.debug("Copied " + Object.keys(this.results).length + " behaviors to " + alias + " (" + deltaTime + "ms)");
    return this;
  };
  
  // replace behaviors in search
  this.paste = function(alias) {
    let startTime = Date.now();
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    this.action = "paste";
    if (!alias) {
      console.error("Copy failed: Alias is not defined!");
      return this;
    }
    if (!this.clipboards[alias]) {
      console.error("Paste failed: Alias does not exist!");
      return this;
    }
    
    // ENTER PASTE CODE HERE
    
    let deltaTime = Date.now() - startTime;
    console.debug("Pasted " + Object.keys(this.clipboards[alias]).length + " behaviors from " + alias + " (" + deltaTime + "ms)");
    return this;
  };
  
  // internal mods
  this.internal = {
    
    // internal: modify a behavior
    modifyBehavior: function(behavior, mods) {
      
      Object.keys(mods).forEach(function(key) {
        
        // update in results if possible
        try {
          if (key.includes("ZACTIONS")) {
            behaviorsMain.results[behavior].ZACTIONS[key] = mods[key];
          } else {
            behaviorsMain.results[behavior][key] = mods[key];
          }
        } catch(e) {
          console.warn("Failed to update a behavior in results: " + e);
        };
        
        // update in virtual behavior storage system if possible
        try {
          if (key.includes("ZACTIONS")) {
            self._initBehaviors[behavior].ZACTIONS[key] = mods[key];
          } else {
            self._initBehaviors[behavior][key] = mods[key];
          }
        } catch(e) {
          console.warn("Failed to update a behavior in virtual storage: " + e);
        }
        
      });
      
      // tell main thread to update the behavior if possible
      if (self.systemExperimental) {
        return;
      }
      try {
        let ZPK = behaviorsMain.results[behavior].Z_PK;
        postMessage(["modifyBehavior", ZPK, behaviorsMain.results[behavior]]);
      } catch(e) {
        console.error("Failed to send modification command to main thread: " + e);
      }
      
    },
    
    // enable result behaviors
    enable: function() {
      Object.keys(behaviorsMain.results).forEach(function(behavior) {
        behaviorsMain.internal.modifyBehavior(behavior, {
          ZACTIONS.active: true
        });
      });
      let count = Object.keys(behaviorsMain.results).length;
      console.debug("Enabled " + count + " behaviors.");
    },
    // disable result behaviors
    disable: function() {
      Object.keys(behaviorsMain.results).forEach(function(behavior) {
        behaviorsMain.internal.modifyBehavior(behavior, {
          ZACTIONS.active: false
        });
      });
      let count = Object.keys(behaviorsMain.results).length;
      console.debug("Disabled " + count + " behaviors.");
    }
  };
  
  // modifications - key = command | value = array of supported modes
  this.mods = {
    enable: ["search", "paste", "create"],
    disable: ["search", "paste", "create"],
    destroy: ["search"],
    setInputField: ["search", "create"],
    secureInputField: ["search", "create", "paste"],
    secureAllInputFields: ["search", "create", "paste"],
    disconnectOutput: ["search", "create"],
    connectOutput: ["search", "create"],
    disconnectAllInputs: ["search", "create"],
    disconnectAllOutputs: ["search", "create"],
    hide: ["search", "paste", "create"],
    show: ["search", "paste", "create"],
    setType: ["search", "create"],
    setName: ["search", "create"],
    moveBy: ["search", "create", "paste"],
    moveToPoint: ["search", "create", "paste"],
    moveToObject: ["search", "create", "paste"],
  };
  let behaviorsMain = this;
  Object.keys(this.mods).forEach(function(mod) {
    behaviorsMain[mod] = function(...args) {
      if (!behaviorsMain.mods[mod].includes(behaviorsMain.action)) {
        return console.error("Invalid usage: " + mod + " in " + behaviorsMain.action);
      }
      try {
        behaviorsMain.internal[mod](behaviorsMain.action, args);
      } catch(e) {
        console.error("Warning: " + behaviorsMain.action + "." + mod + " is not supported yet!");
      }
      return behaviorsMain;
    };
  });
  
  // debug methods
  this.listInternal = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    return this.results;
  };
  this.log = function(seperator) {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    let list = Object.keys(this.results);
    console.log(JSON.stringify(list, null, seperator || "  "));
    return this;
  };
  this.logInternal = function(seperator) {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    let list = this.results;
    console.log(JSON.stringify(list, null, seperator || "  "));
    return this;
  };
  this.list = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    let result = Object.keys(this.results);
    return result;
  };
  this.count = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    let result = Object.keys(this.results).length;
    return result;
  };
  
  // copy and pasting from object
  var _behaviorMain = this;
  this.clipboards = {};
  this.currentClipboard = {};
  this.clipboardHandler = {};
  this.clipboardHandler.clear = function() {
    this.clipboards = {};
  };
  this.clipboardHandler.list = function() {
    return Object.keys(_behaviorMain.clipboards);
  }
  this.clipboardHandler.listInternal = function() {
    return _behaviorMain.clipboards;
  }
  this.clipboardHandler.log = function() {
    return console.log(JSON.stringify(Object.keys(_behaviorMain.clipboards), null, "  "));
  }
  this.clipboardHandler.logInternal = function() {
    return console.log(JSON.stringify(_behaviorMain.clipboards, null, "  "));
  }
  this.clipboardHandler.remove = function(alias) {
    delete _behaviorMain.clipboards[alias];
    console.log("Removed " + alias.trim() + " from clipboard.");
    return _behaviorMain;
  };
  this.clipboardHandler.copy = function(objectName, alias) {
    let startTime = Date.now();
    let self = _behaviorMain;
    if (!alias) {
      console.error("Copy failed: Alias is not defined!");
      return self;
    }
    this.action = "copy";
    this.results = JSON.parse(JSON.stringify(_initBehaviors));
    if (!_initObjects[objectName]) {
      return console.error("Copy failed: Object " + JSON.stringify(objectName) + " does not exist!");
    }
    let zpks = self.objectZPKs;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      if (zpks[data.ZOBJECT].ZNAME !== objectName) {
        delete self.results[behavior];
      }
    });
    self.clipboards[alias] = self.results;
    self.currentClipboard = self.results;
    let deltaTime = Date.now() - startTime;
    console.debug("Copied " + Object.keys(self.results).length + " behaviors to " + alias + " (" + deltaTime + "ms)");
    return self;
  };
  this.clipboardHandler.paste = function(objectName, alias) {
    let startTime = Date.now();
    let self = _behaviorMain;
    self.action = "paste"
    if (!alias) {
      console.error("Paste failed: Alias is not defined!");
      return self;
    }
    if (!self.clipboards[alias]) {
      console.error("Paste failed: Alias does not exist!");
      return self;
    }
    self.currentClipboard = self.clipboards[alias] || {};
    if (!_initObjects[objectName]) {
      return console.error("Paste failed: Object " + JSON.stringify(objectName) + " does not exist!");
    }
      
    // ENTER PASTE CODE HERE
      
    let deltaTime = Date.now() - startTime;
    console.debug("Pasted " + Object.keys(self.currentClipboard).length + " behaviors from " + alias + " (" + deltaTime + "ms)");
    return self;
  };
      
}

_behaviorFunctionHandler.prototype = {
  get search() {
    this.results = JSON.parse(JSON.stringify(self._initBehaviors));
    // update ztags
    let ztags = {};
    let behaviors = this.results;
    Object.keys(behaviors).forEach(function(key) {
      let data = behaviors[key];
      ztags[data.ZTAG] = data;
    });
    this.ztags = ztags;

    // update object zpks
    let objectZPKs = {};
    let objs = JSON.parse(JSON.stringify(self._initObjects));
    Object.keys(objs).forEach(function(name) {
      let data = objs[name];
      objectZPKs[data.Z_PK] = data;
    });
    this.objectZPKs = objectZPKs;
    this.action = "search";
    return this;
  },
  
  get all() {
    this.results = JSON.parse(JSON.stringify(self._initBehaviors));
    // update ztags
    let ztags = {};
    let behaviors = this.results;
    Object.keys(behaviors).forEach(function(key) {
      let data = behaviors[key];
      ztags[data.ZTAG] = data;
    });
    this.ztags = ztags;

    // update object zpks
    let objectZPKs = {};
    let objs = JSON.parse(JSON.stringify(self._initObjects));
    Object.keys(objs).forEach(function(name) {
      let data = objs[name];
      objectZPKs[data.Z_PK] = data;
    });
    this.objectZPKs = objectZPKs;
    this.action = "search";
    return this;
  },
  
  get clipboard() {
    this.results = JSON.parse(JSON.stringify(self._initBehaviors));
    // update ztags
    let ztags = {};
    let behaviors = this.results;
    Object.keys(behaviors).forEach(function(key) {
      let data = behaviors[key];
      ztags[data.ZTAG] = data;
    });
    this.ztags = ztags;

    // update object zpks
    let objectZPKs = {};
    let objs = JSON.parse(JSON.stringify(self._initObjects));
    Object.keys(objs).forEach(function(name) {
      let data = objs[name];
      objectZPKs[data.Z_PK] = data;
    });
    this.objectZPKs = objectZPKs;
    this.action = "clipboard";
    return this.clipboardHandler;
  },
  
  get inputs() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    let entries = [];
    let self = this;
    Object.keys(self.results).forEach(function(behavior) {
      let outputs = {};
      let data = self.results[behavior];
      Object.keys(data.ZACTIONS).forEach(function(field) {
        let inputData = data.ZACTIONS[field] || {};
        if (inputData.value !== undefined && inputData.controlledBy !== undefined) {
          outputs[field] = inputData;
        }
      })
      entries.push(outputs);
    });
    if (entries.length == 0) {
      return {};
    }
    if (entries.length == 1) {
      return entries[0];
    }
    return entries;
  },
  
  get inputFieldCount() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    let count = 0;
    let self = this;
    Object.keys(self.results).forEach(function(behavior) {
      let outputs = {};
      let data = self.results[behavior];
      Object.keys(data.ZACTIONS).forEach(function(field) {
        let inputData = data.ZACTIONS[field] || {};
        if (inputData.value !== undefined && inputData.controlledBy !== undefined) {
          count++;
        }
      })
    });
    return count;
  }
  
};

Object.prototype.format = function(seperator) {
  return JSON.stringify(this, null, seperator || "  ");
};

Array.prototype.format = function(seperator) {
  return JSON.stringify(this, null, seperator || "  ");
};

Object.prototype.log = function() {
  console.log(JSON.stringify(Object.keys(this), null, seperator || "  "));
}

Object.prototype.logInternal = function() {
  console.log(JSON.stringify(this, null, seperator || "  "));
}

Array.prototype.log = function() {
  console.log(JSON.stringify(this, null, seperator || "  "));
}

Array.prototype.logInternal = function() {
  console.log(JSON.stringify(this, null, seperator || "  "));
}

const behaviors = new _behaviorFunctionHandler();
