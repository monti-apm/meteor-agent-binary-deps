Tinytest.add(
  'v8profiler module',
  function function_name (test) {
    var v8profiler = KadiraBinaryDeps.require('v8-profiler-next');
    test.equal(typeof v8profiler.takeSnapshot, 'function');
  }
);
