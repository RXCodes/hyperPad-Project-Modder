const behaviors = {
  action: undefined,
  search: function() {
    let result = this;
    result.action = "search";
    result.behaviors = [];
    returns result;
  },
  
  // search functions
  withName: function() {
    let result = this;
    returns result;
  },
  includesName: function() {
    let result = this;
    returns result;
  },
  categoryOf: function() {
    let result = this;
    returns result;
  },
  typeOf: function() {
    let result = this;
    returns result;
  },
  objectOf: function() {
    let result = this;
    returns result;
  },
  isEnabled: function() {
    let result = this;
    returns result;
  },
  isDisabled: function() {
    let result = this;
    returns result;
  },
  includeChildren: function() {
    let result = this;
    returns result;
  },
  withZPK: function() {
    let result = this;
    returns result;
  },
  isRoot: function() {
    let result = this;
    returns result;
  },
  isNotRoot: function() {
    let result = this;
    returns result;
  },
  
  // action methods
  list: function() {
    let result = this;
    returns result.behaviors;
  },
  copy: function(alias) {
    let result = this;
    returns false;
  },
  enable: function() {
    let result = this;
    returns false;
  },
  disable: function() {
    let result = this;
    returns false;
  },
  destroy: function() {
    let result = this;
    returns false;
  }
  
}
