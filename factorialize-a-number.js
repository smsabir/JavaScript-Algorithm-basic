function factorialize(num) {
  let fact = 1;
  if(num === 0){
    return fact;
  }
  else{
    for(let i = 1; i <= num; i++){
      fact = fact * i;
    }
  }
  return fact;
}

factorialize(5);