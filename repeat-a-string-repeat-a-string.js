function repeatStringNumTimes(str, num) {
  var strNew="";
  if(num > 0){
    for(let i  = 0; i < num; i++){
      strNew += str;
      // console.log(strNew)
    }
  }
  return strNew;
}

repeatStringNumTimes("abc", 3);