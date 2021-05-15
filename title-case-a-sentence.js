function titleCase(str) {
  let words = [];
  str = str.toLowerCase();
  words = str.split(" ");
  for(let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1, words[i].length)
  }
  let newString = words.join(" ");
  return newString;
}

titleCase("I'm a little tea pot");