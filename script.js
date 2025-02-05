import axios from 'axios';
import Quote from 'inspirational-quotes';
// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
  // handle success
  //console.log(response);
});

console.log(Quote.getQuote());
