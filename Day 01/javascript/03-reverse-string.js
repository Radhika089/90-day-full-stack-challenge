function reverseStr(str) {
  let char = "";

  for (let i = str.length - 1; i >= 0; i--) {
    char += str[i];
  }
  console.log(char);
}
reverseStr("Radhika");
