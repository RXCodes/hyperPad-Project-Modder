//68//
function behaviorFunctionHandler() {
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
  
  // action methods
  this.list = function() {
    return this.behaviors;
  };
  this.copy = function(alias) {
    return false;
  };
  this.enable = function() {
    return false;
  };
  this.disable = function() {
    return false;
  };
  this.destroy = function() {
    return false;
  };
  
}

behaviorFunctionHandler.prototype = {
  get search() {
    this.results = [];
    this.action = "search";
    return this;
  }
};

const behaviors = new behaviorFunctionHandler();
