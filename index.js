const SingleTon = require("./single");

function main() {
  SingleTon.initialize("Initial");

  let s1 = SingleTon.getInstance();
  let s2 = SingleTon.getInstance();
  let s3 = SingleTon.getInstance();

  console.log(s2.get());

  s1.set("Sam");

  console.log(s3.get());
}

main();
