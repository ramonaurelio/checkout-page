const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".num");
const plus2 = document.querySelector(".plus2");
const minus2 = document.querySelector(".minus2");
const num2 = document.querySelector(".num2");

let a = 1;

plus.addEventListener("click", () => {
  a++;
  num.innerText = a;
});
minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    num.innerText = a;
  }
});

let b = 1;

plus2.addEventListener("click", () => {
  b++;
  num2.innerText = b;
});
minus2.addEventListener("click", () => {
  if (b > 1) {
    b--;
    num2.innerText = b;
  }
});
