/**
 * To assign a property to a template
 */
ReactiveTemplates.assignProperty = function(property, identifier, data) {
  var self = this;
  Tracker.autorun(function () {
    var template = self.get(identifier);
    if (Blaze.isTemplate(Template[template])) {
      Template[template][property](data);
    }
  });
}

/**
 * Set helpers to a template that maybe it doensn't exists yet
 */
ReactiveTemplates.helpers = function(identifier, helpers) {
  ReactiveTemplates.assignProperty('helpers', identifier, helpers);
}

/**
 * Set events to a template that maybe it doensn't exists yet
 */
ReactiveTemplates.events = function(identifier, events) {
  ReactiveTemplates.assignProperty('events', identifier, events);
}

/**
 * Set onRendered to a template that maybe it doensn't exists yet
 */
ReactiveTemplates.onRendered = function(identifier, onRendered) {
  ReactiveTemplates.assignProperty('onRendered', identifier, onRendered);
}

/**
 * Set onCreated to a template that maybe it doensn't exists yet
 */
ReactiveTemplates.onCreated = function(identifier, onCreated) {
  ReactiveTemplates.assignProperty('onCreated', identifier, onCreated);
}

/**
 * Set onDestroyed to a template that maybe it doensn't exists yet
 */
ReactiveTemplates.onDestroyed = function(identifier, onDestroyed) {
  ReactiveTemplates.assignProperty('onDestroyed', identifier, onDestroyed);
}

Template.reactiveTemplate.helpers({
  template: function() {
    return ReactiveTemplates.get(this.template);
  }
});