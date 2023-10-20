function factorialize(num) {
    if(num == 0){
      return 1;
    }
    let result = 1;
    for(let i = 1; i <= num; i++){
      result *= i ;
      console.log(result);
    }
    return result;
  }
  
  factorialize(5);