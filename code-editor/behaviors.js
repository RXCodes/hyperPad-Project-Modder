const behaviors = {
  action: undefined,
  search: function() {
    let self = this;
    self.action = "search";
    returns self;
  },
  
  // search functions
  withName: function() {
    let self = this;
    returns self;
  },
  includesName: function() {
    let self = self;
    returns self;
  },
  categoryOf: function() {
    let self = self;
    returns self;
  },
  typeOf: function() {
    let self = this;
    returns self;
  },
  objectOf: function() {
    let self = this;
    returns self;
  },
  isEnabled: function() {
    let self = this;
    returns self;
  },
  isDisabled: function() {
    let self = this;
    returns self;
  },
  includeChildren: function() {
    let self = this;
    returns self;
  },
  withZPK: function() {
    let self = this;
    returns self;
  },
  isRoot: function() {
    let self = this;
    returns self;
  },
  isNotRoot: function() {
    let self = this;
    returns self;
  },
  
  // action methods
  list: function() {
    let self = this;
    returns [];
  },
  copy: function(alias) {
    let self = this;
    returns false;
  },
  enable: function() {
    let self = this;
    returns false;
  },
  disable: function() {
    let self = this;
    returns false;
  },
  destroy: function() {
    let self = this;
    returns false;
  }
  
}
