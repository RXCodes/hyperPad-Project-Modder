
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
  this.objectOf = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    return this;
  };
  this.isEnabled = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    return this;
  };
  this.isDisabled = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    return this;
  };
  this.includeChildren = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    return this;
  };
  this.withZPK = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    return this;
  };
  this.isRoot = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
    return this;
  };
  this.isNotRoot = function() {
    if (this.action !== "search") {
      throw "Invalid usage - must use '.search' beforehand.";
    };
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
    this.results = self._initBehaviors;
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
