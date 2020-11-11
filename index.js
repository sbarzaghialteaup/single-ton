const SingleTon = require("./single");

function main() {
  SingleTon.initialize();

  let s1 = SingleTon.getInstance();
  let s2 = SingleTon.getInstance();
  let s3 = SingleTon.getInstance();

  s1.set("Sam");

  console.log(s3.get());
}

main();
