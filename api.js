async function callAPI() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

// const  callAPI = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   data.forEach((item) => {
//     console.log("=============================================");
//     console.log("name: ", item.name);
//     console.log("email: ", item.email);
//     console.log("=============================================");
//   });
// }

// callAPI();

// function printHi(){
//     console.log("hi world")
// }

// printHi()

const printHI = () => {
  console.log("hi world");
};

// printHI()

// IIFE ----> Immediatly Invocked Funciton Execution
// (async () => {
//     console.log("hi")
// })()
