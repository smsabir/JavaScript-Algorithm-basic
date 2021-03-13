function confirmEnding(str, target) {

  let end = new RegExp(target + "$", "i");
  return end.test(str);
}

console.log(confirmEnding("Bastian", "n"));