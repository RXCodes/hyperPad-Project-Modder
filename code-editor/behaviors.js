//97//
var _initBehaviors = {};
var _initObjects = {};

// load data
const onmessage = function(e) {
  let data = e.data;
  if (data[0] == "loadBehaviors") {
    _initBehaviors = data[1];
  }
  if (data[1] == "loadObjects") {
    _initObjects = data[2];
  }
}

function _behaviorFunctionHandler() {
  this.action = undefined;
  this.results = [];
  
  // search functions
  this.withName = function() {
    return this;
  };
  this.includesName = function() {
    return this;
  };
  this.categoryOf = function() {
    return this;
  };
  this.typeOf = function() {
    return this;
  };
  this.objectOf = function() {
    return this;
  };
  this.isEnabled = function() {
    return this;
  };
  this.isDisabled = function() {
    return this;
  };
  this.includeChildren = function() {
    return this;
  };
  this.withZPK = function() {
    return this;
  };
  this.isRoot = function() {
    return this;
  };
  this.isNotRoot = function() {
    return this;
  };
  this.global = function() {
    return this;
  };
  
  // action methods
  this.list = function() {
    return "Does not work yet!";
  };
  this.copy = function(alias) {
    return "Does not work yet!";
  };
  this.enable = function() {
    return "Does not work yet!";
  };
  this.disable = function() {
    return "Does not work yet!";
  };
  this.destroy = function() {
    return "Does not work yet!";
  };
  this.listInternal = function() {
    return "Does not work yet!";
  };
  this.setInput = function() {
    return "Does not work yet!";
  };
  this.secureInput = function() {
    return "Does not work yet!";
  };
  this.secureALlInputs = function() {
    return "Does not work yet!";
  };
  
}

_behaviorFunctionHandler.prototype = {
  get search() {
    this.results = _initBehaviors;
    this.action = "search";
    return this;
  }
};

const behaviors = new _behaviorFunctionHandler();
