const url1 = `https://jsonplaceholder.typicode.com/todos/1`;
fetch(url1)
  .then((res) => {
    console.log(res.status); // or res.ok :>> 200
    return res.json();
  })
  .then((data) => {
    console.log(data); // Object { userId: 1, id: 1, title: "delectus aut autem", completed: false }
  })
  .catch((err) => {
    console.error(error);
  });

/* 
=============  
one more
=============   
*/

const delay = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms));
};

const url = `https://jsonplaceholder.typicode.com/todos`;

function fetchTodos() {
  console.log("Fetch todo started...");
  return delay(2000)
    .then(() => fetch(url))
    .then((response) => response.json());
}

fetchTodos()
  .then((data) => {
    console.log("data :>> ", data);
  })
  .catch((e) => console.error(e));
