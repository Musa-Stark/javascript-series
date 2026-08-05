const btn = document.querySelector("#btn");
const img = document.querySelector("#img");

// btn.addEventListener("click", async () => {
//   btn.textContent = "loading...";

//   const response = await fetch("https://dog.ceo/api/breeds/image/random");
//   const data = await response.json();
//   img.src = data.message;
//   btn.textContent = "Click Me";
// });

btn.addEventListener("click", async () => {
  btn.textContent = "loading...";

  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  console.log(data.slip.advice);
  btn.textContent = "Click Me";
});

// console.log(1);
// console.log(2);
// try {
//   console.log(3);
// } catch (error) {
//   console.log({
//     success: false,
//     messsage: error.message,
//   });
// }
// console.log(4);
// console.log(5);

// setTimeout(() => {
//   console.log("hello world")
// }, 10000)

// setInterval(() => {
//   console.log("hello world")
// }, 1000)

const hello = () => {
  console.log("hello world")
}

// hello()