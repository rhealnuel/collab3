const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");

const btn1 = document.getElementById("productButton1");
const btn2 = document.getElementById("productButton2");
const btn3 = document.getElementById("productButton3");

const a = p1.innerHTML;
const b = p2.innerHTML;
const c = p3.innerHTML;

btn1.addEventListener("click", () => {
  localStorage.clear();
  localStorage.setItem("a", a);
});

btn2.addEventListener("click", () => {
  localStorage.clear();
  localStorage.setItem("a", b);
});

btn3.addEventListener("click", () => {
  localStorage.clear();
  localStorage.setItem("a", c);
});
