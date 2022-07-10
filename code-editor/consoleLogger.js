fixLoggingFunc('log');
fixLoggingFunc('debug');
fixLoggingFunc('warn');
fixLoggingFunc('error');
fixLoggingFunc('info');

function fixLoggingFunc(name) {
  console['old' + name] = console[name];
  console[name] = function(...arguments) {
    const output = postMessage('console', name, arguments);
    console['old' + name].apply(undefined, arguments);
  };
}
