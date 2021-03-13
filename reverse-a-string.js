function reverseString(str) {
  let rev = "";
  for(let i = str.length-1; i >= 0 ; i--){
    const letter = str[i];
    rev = rev + letter;
  }
  return rev;
}
reverseString("hello");