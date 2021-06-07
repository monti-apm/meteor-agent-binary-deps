Package.describe({
  "summary": "Binary Dependencies for montiapm:agent",
  "version": "2.0.0",
  "git": "https://github.com/monti-apm/meteor-agent-binary-deps.git",
  "name": "montiapm:agent-binary-deps"
});

Npm.depends({
  "v8-profiler-next": "1.4.0"
});

Package.onUse(function(api) {
  configure(api);
  api.export(['KadiraBinaryDeps']);
});

Package.onTest(function(api) {
  configure(api);
  api.versionsFrom('METEOR@1.4');
  api.use('tinytest');
  api.addFiles('test.js', 'server');
});

function configure(api) {
  api.addFiles('index.js', 'server');
}
