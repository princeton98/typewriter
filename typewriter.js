const sentence = "hello there from lighthouse labs";
console.log(sentence.length);
let s = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, s);
  console.log(s);
  s += 50;
}
setTimeout(() => {
  console.log(" ")
}, s);
