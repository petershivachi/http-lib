class easyHttp {

  //Make an HTTP GET Request
  get(url){
   return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => res.json())
    .then(user => resolve(user))
    .catch(error => reject(error));
   })
  }

  //Make an HTTP POST Request
  post(url, user){
    return new Promise((resolve, reject) => {
      fetch(url, 
        {
          method : 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
      .then(res => res.json())
      .then(user => resolve(user))
      .catch(error => reject(error))
    })
  }

  //Make an HTTP PUT Request
  put(url, user){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(user => resolve(user))
      .catch(error => reject(error))
    })
  }


  //Make an HTTP DELETE Request
  delete(url){
    return new Promise((resolve, reject) => {
      fetch(url,
        {
          method: 'DELETE',
          headers: {
            'Content-type' : 'application/json'
          }
        })
      .then(res => res.json())
      .then(user => resolve('Resource Deleted ...'))
      .catch(error => reject(error))
    })
  }
}