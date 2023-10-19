let n = +prompt("Enter a number");
let res = 0;

if (n > 0) {
  res = (n * (n + 1)) / 2;
}

let data = JSON.parse(localStorage.getItem("Sumofnumbers")) || [];
if (data.some((val) => {
    return val.num === n
})) {
  data.find((val) => {
    return val
  });
  console.log(`Previously calculated the sum of ${n} natural number ${res}`);
} else {
  let obj = {
    num: n,
    value: res,
  };
  console.log(`sum of first ${n} natural numbers is ${res}`);
  data.push(obj);
  localStorage.setItem("Sumofnumbers", JSON.stringify(data));
}

console.log( data);
