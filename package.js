Package.describe({
  name: 'nicolaslopezj:reactive-templates',
  summary: 'Set templates reactively',
  version: '1.0.0',
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
