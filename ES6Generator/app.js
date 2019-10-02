function* gen() { 
    yield 1;
    yield 2;
    yield 3;
  }
  
  var g = gen(); // "Generator { }"

  console.log(this);
  console.log(g);
  