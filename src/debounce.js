export default (func, interval = 300) => {
  let timeout = null;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (typeof func === 'function') func.apply(this, arguments);
    }, interval);
  };
};
