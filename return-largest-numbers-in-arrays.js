function largestOfFour(arr) {

  let LargeNums= [];
  for(let i = 0; i < arr.length; i++){
    LargeNums[i] = arr[i][0];
    for(let x = 0; x < arr[i].length; x++){
      if(arr[i][x] > LargeNums[i]){
        LargeNums[i] = arr[i][x];
      }
    }
  }
  return LargeNums;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);