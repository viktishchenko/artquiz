const loadData = async () => {
  try {
    const url = `https://jsonplaceholder.typicode.com/todos/1`;
    const res = await fetch(url);
    console.log(res.ok); //or res.status :>> true
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

loadData();

/* // get data
loadData().then((data) => {
  console.log(data); // Object { userId: 1, id: 1, title: "delectus aut autem", completed: false }
});
 */
(async () => {
  const data = await loadData();
  console.log("data :>> ", data.title); // data :>>  delectus aut autem
})();

const loadDatas = async () => {
  try {
    const url1 = `https://jsonplaceholder.typicode.com/todos/1`;
    const url2 = `https://jsonplaceholder.typicode.com/todos/2`;
    const url3 = `https://jsonplaceholder.typicode.com/todos/3`;

    const results = await Promise.all([fetch(url1), fetch(url2), fetch(url3)]);
    const dataPromises = results.map((result) => result.json());
    const finalData = await Promise.all(dataPromises);
    console.log(finalData);
    return finalData;
  } catch (err) {
    console.error(err);
  }
};

loadDatas();

/* 
=============  
one more
=============   
*/

const delays = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms));
};

const url5 = `https://jsonplaceholder.typicode.com/todos`;

async function fetchAsyncTodos() {
  console.log("Fetch todo started...");
  try {
    await delays(2000);
    const response = await fetch(url5);
    const data = await response.json();
    console.log("data :>> ", data);
  } catch (error) {
    console.error(error);
  }
}

fetchAsyncTodos();
