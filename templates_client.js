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

Template.reactiveTemplate.helpers({
  template: function() {
    return ReactiveTemplates.get(this.template);
  }
});