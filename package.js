Package.describe({
  "summary": "Binary Dependencies for montiapm:agent",
  "version": "2.1.1",
  "git": "https://github.com/monti-apm/meteor-agent-binary-deps.git",
  "name": "montiapm:agent-binary-deps"
});

Npm.depends({
  "v8-profiler-next": "1.10.0"
});

Package.onUse(function(api) {
  configure(api);
  api.export(['MontiBinaryDeps']);
});

Package.onTest(function(api) {
  configure(api);
  api.use('tinytest@1.1.0||2.0.0-rc300.0');
  api.addFiles('test.js', 'server');
});

function configure(api) {
  api.versionsFrom('METEOR@1.9');
  api.addFiles('index.js', 'server');
}
