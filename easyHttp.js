class easyHttp {

  //Make an HTTP GET Request
  // get(url){
  //  return new Promise((resolve, reject) => {
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(user => resolve(user))
  //   .catch(error => reject(error));
  //  })
  // }

  async get(url) {

    const error = false;

    if (!error){
      const response = await fetch(url);
      const users = await response.json()
      return users;
    }else {
      await Promise.reject(new Error('Something went wrong....'))
    }
    
  }

  //Make an HTTP POST Request
  // post(url, user){
  //   return new Promise((resolve, reject) => {
  //     fetch(url, 
  //       {
  //         method : 'POST',
  //         headers: {
  //           'Content-type': 'application/json'
  //         },
  //         body: JSON.stringify(user)
  //       })
  //     .then(res => res.json())
  //     .then(user => resolve(user))
  //     .catch(error => reject(error))
  //   })
  // }

  async post(url,user){

    const error = false;
    if (!error){
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
  
      const data = await response.json();
      return data;
    }else {
      await Promise.reject(new Error('Something went wrong...'))
    }
  }

  // //Make an HTTP PUT Request
  // put(url, user){
  //   return new Promise((resolve, reject) => {
  //     fetch(url, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-type' : 'application/json'
  //       },
  //       body: JSON.stringify(user)
  //     })
  //     .then(res => res.json())
  //     .then(user => resolve(user))
  //     .catch(error => reject(error))
  //   })
  // }

  async put(url, user){
    
    const error = false;
    if (!error){
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
  
      const data = await response.json()
      return data;
  
    }else {
      await Promise.reject(new Error('Something went wrong...'))
    }
  }


  //Make an HTTP DELETE Request
  // delete(url){
  //   return new Promise((resolve, reject) => {
  //     fetch(url,
  //       {
  //         method: 'DELETE',
  //         headers: {
  //           'Content-type' : 'application/json'
  //         }
  //       })
  //     .then(res => res.json())
  //     .then(user => resolve('Resource Deleted ...'))
  //     .catch(error => reject(error))
  //   })
  // }

  async delete(url){
    const response = await fetch(url,{
      method: 'DELETE',
      headers: {
        'Content-type' : 'application/json'
      }
    });

    const user = await response.json();
    return 'User Deleted...';
  }
}