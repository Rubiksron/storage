module.exports = fp = {};

fp.map = (cb, els)=> {
  const result = [];
  for (let i = 0; i < els.length; i++) {
    result.push(cb(els[i]));
  }
  return result;
};

fp.filter = (cb, els)=> {
  const result = [];
  for (let i = 0; i < els.length; i++) {
    if (cb(els[i])) {
      result.push(els[i]);
    }
  }
  return result;
};

fp.reduce = (cb, initialState, els)=> {
  for (let i = 0; i < els.length; i++) {
    initialState = cb(initialState, els[i]);
  }
  return initialState;
};

fp.slice = (begin, upTo, els)=> {
  const result = [];
  for (let i = begin; i < upTo; i++) {
    result.push(els[i]);
  }
  return result;
};

