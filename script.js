import axios from 'axios';

// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
  // handle success
  console.log(response);
});
