function nonMutatingConcat(original, attach) {
    // Only change code below this line
    const r = original.concat(attach);
    return r;
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);