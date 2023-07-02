// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
function fetchData(apiUrls) {
  return Promise.all(apiUrls.map(apiUrls => fetch(apiUrls)))
}
function comparePerformance() {
  const start = Date.now()
  fetchData(apiUrls)
  const end = Date.now()
  const time = end - start
  document.getElementById("output-all").innerHTML = time
  start = Date.now()
  fetchData(apiUrls)
  end = Date.now()
  time = end - start
  document.getElementById("output-any").innerHTML = time
}
function displayResults() {
  comparePerformance()
}
