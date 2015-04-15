Package.describe({
  name: 'nicolaslopezj:reactive-templates',
  summary: 'Create templates that you can override in meteor',
  version: '1.0.1',
  git: 'https://github.com/nicolaslopezj/reactive-templates'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('meteor-platform');

  api.addFiles('templates.js');
  api.addFiles(['templates.html', 'templates_client.js'], 'client');

  api.export('ReactiveTemplates');
});

Package.onTest(function(api) {
});
