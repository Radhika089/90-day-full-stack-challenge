function palindrome(char) {
  let str = char.split("").reverse().join("");

  if (str === char) return true;
  else return false;
}

console.log(palindrome("level"));
