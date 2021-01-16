const http = new easyHttp;

// //Fetch Users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(users => console.log(users))
// .catch(error => console.log(error));


//Create a user
const user = {
  name: 'Waikau Erick',
  username: 'codeprospects',
  username: 'eric@gmail.com'
}

// //Create a user
// http.post('https://jsonplaceholder.typicode.com/users', user)
// .then(user => console.log(user))
// .catch(error => console.log(error));

// //Update a user
// http.put('https://jsonplaceholder.typicode.com/users/2', user)
// .then(user => console.log(user))
// .catch(error => console.log(error));


// //Delete a user
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(response => console.log(response))
.catch(error => console.log(error));