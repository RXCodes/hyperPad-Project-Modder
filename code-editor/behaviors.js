
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
  this.getInputs = function() {
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
      })
    });
    return outputs;
  };
  this.getInput = function(input) {
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
    if (!alias) {
      console.error("Copy failed: Alias is not defined!");
      return this;
    }
    this.clipboards[alias] = self.results;
    let deltaTime = Date.now() - startTime;
    console.debug("Copied " + Object.keys(self.results).length + " behaviors to " + alias + " (" + deltaTime + "ms)");
    return this;
  };
  
  // replace behaviors in search
  this.paste = function(alias) {
    let startTime = Date.now();
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
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
  
  // modifications - key = command | value = array of supported modes
  this.mods = {
    enable: ["search", "paste", "create"],
    disable: ["search", "paste", "create"],
    destroy: ["search"],
    setInputField: ["search", "create"],
    secureInputField: ["search", "create"],
    secureAllInputFields: ["search", "create"],
    disconnectInput: ["search", "create"],
    connectInput: ["search", "create"],
    disconnectAllInputs: ["search", "create"],
    disconnectAllOutputs: ["search", "create"],
    hide: ["search", "paste", "create"],
    show: ["search", "paste", "create"],
    setType: ["search", "create"],
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
      postMessage("command", behaviorsMain.action, mod, args);
      return this;
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
    this.action = "copyActions";
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
    self.action = "pasteActions";
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
      
}

_behaviorFunctionHandler.prototype = {
  get search() {
    this.results = JSON.parse(JSON.stringify(self._initBehaviors));
    this.action = "search";
    return this;
  },
  
  get all() {
    this.results = JSON.parse(JSON.stringify(self._initBehaviors));
    this.action = "search";
    return this;
  },
  
  get clipboard() {
    this.results = JSON.parse(JSON.stringify(self._initBehaviors));
    this.action = "clipboard";
    return this.clipboardHandler;
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
