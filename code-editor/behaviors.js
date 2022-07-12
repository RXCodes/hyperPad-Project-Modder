
function _behaviorFunctionHandler() {
  this.action = undefined;
  this.results = {};
 
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
    let zpks = self.objectZPKs;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      if (zpks[data.ZOBJECT] !== objectName) {
        delete self.results[behavior];
      }
    });
    return this;
  };
  this.notObjectOf = function(objectName) {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    let zpks = self.objectZPKs;
    Object.keys(self.results).forEach(function(behavior) {
      let data = self.results[behavior];
      if (zpks[data.ZOBJECT] == objectName) {
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
    return this;
  };
  
  this.list = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    let result = Object.keys(this.results);
    return result;
  };
  this.copy = function(alias) {
    return "Does not work yet!";
  };
  this.enable = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    return "Does not work yet!";
  };
  this.disable = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    return "Does not work yet!";
  }
  this.destroy = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    return "Does not work yet!";
  };
  this.listInternal = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    return this.results;
  };
  this.setInput = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    return "Does not work yet!";
  };
  this.secureInput = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    return "Does not work yet!";
  };
  this.secureAllInputs = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    }
    return "Does not work yet!";
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
  
}

_behaviorFunctionHandler.prototype = {
  get search() {
    this.results = JSON.parse(JSON.stringify(self._initBehaviors));
    if (!this.ztagInit) {
      
      // update ztags
      this.ztagInit = true;
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
        objectZPKs[data.ZPK] = data;
      });
      this.objectZPKs = objectZPKs;
      
    }
    this.action = "search";
    return this;
  }
};

Object.prototype.format = function(seperator) {
  return JSON.stringify(this, null, seperator || "  ");
};

Array.prototype.format = function(seperator) {
  return JSON.stringify(this, null, seperator || "  ");
};

const behaviors = new _behaviorFunctionHandler();
