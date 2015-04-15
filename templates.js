ReactiveTemplates = {
  _templates: {},
  _deps: {},
};

/**
 * We will save all the templates that any component need
 */
ReactiveTemplates.request = function(identifier, defaultTemplate) {
  check(identifier, String);
  check(defaultTemplate, Match.Optional(String));
  this._deps[identifier] = new Tracker.Dependency;
  this._templates[identifier] = defaultTemplate;
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
  if (!_.has(this._deps, identifier)) throw 'Template "' + identifier + '" is not requested';
  this._templates[identifier] = templateName;
  this._deps[identifier].changed();
}

if (Meteor.isClient) {

  /**
   * Set helpers to a template that maybe it doensn't exists yet
   */
  ReactiveTemplates.helpers = function(identifier, helpers) {
    var self = this;
    Tracker.autorun(function () {
      var template = self.get(identifier);
      if (Blaze.isTemplate(Template[template])) {
        Template[template].helpers(helpers);
      }
    });
  }

  /**
   * Set events to a template that maybe it doensn't exists yet
   */
  ReactiveTemplates.events = function(identifier, events) {
    var self = this;
    Tracker.autorun(function () {
      var template = self.get(identifier);
      if (Blaze.isTemplate(Template[template])) {
        Template[template].events(events);
      }
    });
  }

  /**
   * Set onRendered to a template that maybe it doensn't exists yet
   */
  ReactiveTemplates.onRendered = function(identifier, onRendered) {
    var self = this;
    Tracker.autorun(function () {
      var template = self.get(identifier);
      if (Blaze.isTemplate(Template[template])) {
        Template[template].onRendered(onRendered);
      }
    });
  }

  /**
   * Set onCreated to a template that maybe it doensn't exists yet
   */
  ReactiveTemplates.onCreated = function(identifier, onCreated) {
    var self = this;
    Tracker.autorun(function () {
      var template = self.get(identifier);
      if (Blaze.isTemplate(Template[template])) {
        Template[template].onCreated(onCreated);
      }
    });
  }

  /**
   * Set onDestroyed to a template that maybe it doensn't exists yet
   */
  ReactiveTemplates.onDestroyed = function(identifier, onDestroyed) {
    var self = this;
    Tracker.autorun(function () {
      var template = self.get(identifier);
      if (Blaze.isTemplate(Template[template])) {
        Template[template].onDestroyed(onDestroyed);
      }
    });
  }
}