const behaviors = {
  action: undefined,
  search: function() {
    let result = this;
    result.action = "search";
    result.behaviors = [];
    return result;
  },
  
  // search functions
  withName: function() {
    let result = this;
    return result;
  },
  includesName: function() {
    let result = this;
    return result;
  },
  categoryOf: function() {
    let result = this;
    return result;
  },
  typeOf: function() {
    let result = this;
    return result;
  },
  objectOf: function() {
    let result = this;
    return result;
  },
  isEnabled: function() {
    let result = this;
    return result;
  },
  isDisabled: function() {
    let result = this;
    return result;
  },
  includeChildren: function() {
    let result = this;
    return result;
  },
  withZPK: function() {
    let result = this;
    return result;
  },
  isRoot: function() {
    let result = this;
    return result;
  },
  isNotRoot: function() {
    let result = this;
    return result;
  },
  
  // action methods
  list: function() {
    let result = this;
    return result.behaviors;
  },
  copy: function(alias) {
    let result = this;
    return false;
  },
  enable: function() {
    let result = this;
    return false;
  },
  disable: function() {
    let result = this;
    return false;
  },
  destroy: function() {
    let result = this;
    return false;
  }
  
}
