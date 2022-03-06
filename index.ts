import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then((response) => {
  const data = response.data as Todo;

  const id = data.id;
  const title = data.title;
  const completed = data.completed;

  console.log(`
  A Todo with ID: ${id} ,title: ${title} and status: ${completed}
  `);
});
