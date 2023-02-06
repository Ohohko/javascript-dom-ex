function nuM(e) {
  return new Promise((resolve, reject) => {
    if (e > 10) {
      resolve("yes its bigger then 10");
    } else {
      reject("no it smaller then 10");
    }
  });
}
let e = 8;
nuM(e)
.then((mes) => {
    console.log(mes);
  })
  .catch((mes) => {
    console.log(mes);
  });
