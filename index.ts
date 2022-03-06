import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos/1";
axios.get(url).then((response) => {
  const data = response.data;

  const ID = data.ID;
  const title = data.Title;
  const finished = data.finished;

  console.log(`
  A Todo with ID: ${ID} ,title: ${title} and status: ${finished}
  `);
});
