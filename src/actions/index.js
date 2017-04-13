import axios from 'axios';

const fetchUsers = function(){
  const request = axios.get('https://jsonplaceholder.typicode.com/users');

  return {
    type: 'FETCH_USERS',
    payload: request
  }
}

export {fetchUsers};
