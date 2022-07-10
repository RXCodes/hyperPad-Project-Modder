const behaviors = {
  action: undefined,
  
  // search functions
  search: function() {
    let result = this;
    this.action = "search";
    this.behaviors = [];
    return this;
  },
  withName: function() {
    return this;
  },
  includesName: function() {
    return this;
  },
  categoryOf: function() {
    return this;
  },
  typeOf: function() {
    return this;
  },
  objectOf: function() {
    return this;
  },
  isEnabled: function() {
    return this;
  },
  isDisabled: function() {
    return this;
  },
  includeChildren: function() {
    return this;
  },
  withZPK: function() {
    return this;
  },
  isRoot: function() {
    return this;
  },
  isNotRoot: function() {
    return this;
  },
  
  // action methods
  list: function() {
    return this.behaviors;
  },
  copy: function(alias) {
    return false;
  },
  enable: function() {
    return false;
  },
  disable: function() {
    return false;
  },
  destroy: function() {
    return false;
  }
  
}
