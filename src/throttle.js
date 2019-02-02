export default (func, wait = 300) => {
  let me;
  let args;
  let timeoutID;
  let last = 0;

  const call = () => {
    timeoutID = null;
    last = new Date();
    if (typeof func === 'function') func.apply(me, args);
    me = null;
    args = null;
  };

  return function() {
    me = this;
    args = arguments;
    const delta = new Date() - last;
    if (!timeoutID) {
      if (delta >= wait) {
        call();
      } else {
        timeoutID = setTimeout(call, wait - delta);
      }
    }
  };
};