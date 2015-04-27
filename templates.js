ReactiveTemplates = {
  _templates: {},
  _deps: {},
  _isRequestedDeps: {},
};

/**
 * We will save all the templates that any component need
 */
ReactiveTemplates.request = function(identifier, defaultTemplate) {
  check(identifier, String);
  check(defaultTemplate, Match.Optional(String));
  this._deps[identifier] = new Tracker.Dependency;
  this._templates[identifier] = defaultTemplate;
  if (_.has(this._isRequestedDeps, identifier)) {
    this._isRequestedDeps[identifier].changed();
  }
}

/**
 * Reactively returns the identifier of the template
 */
ReactiveTemplates.get = function(identifier) {
  if (!_.has(this._deps, identifier)) throw 'Template "' + identifier + '" is not requested';
  this._deps[identifier].depend();
  return this._templates[identifier];
}

/**
 * Assings a template to a template request
 */
ReactiveTemplates.set = function(identifier, templateName) {
  var self = this;
  Tracker.autorun(function () {
    if (self.isRequested(identifier)) {
      self._templates[identifier] = templateName;
      self._deps[identifier].changed();
    }
  });
}

/**
 * Returns if the template is requested
 */
ReactiveTemplates.isRequested = function(identifier) {
  if (!_.has(this._isRequestedDeps, identifier)) {
    this._isRequestedDeps[identifier] = new Tracker.Dependency;
  }
  this._isRequestedDeps[identifier].depend();
  return _.has(this._deps, identifier);
}