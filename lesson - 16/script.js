
//Promise - Object
//1.- Pending
//2. - Fulfilled
//3. - Rejected

/*const myPromise = new Promise((resolve, reject) => {
    
    if(true) {
        resolve('resolved the promise');
    }else {
        reject('rejected the promise');
    }
})

myPromise
  .then((value) => {
    return value + 100
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => console.log(err));


  console.log('Started');
  
  const users = {
      id: 1,
      password: 12345,
      userName: 'John'
    }
    
    const facebook = (password, userName) => {
        
        let user = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(users.password === password && users.userName === userName) {
                    resolve('Welcome to Facebook')
                }else {
                    reject('Password or login is wrong')
                }
            }, 1000)
        })
        
        user
        .then((response) => {
            console.log(response);;
        })
        .catch((err) => console.log(err))
        .finally(() => {
            console.log('Finished');
        })
    }
    
    facebook(12345, 'John');
    
    
    
    console.log('Started');
    
    const users = {
        id: 1,
        password: 678910,
        userName: 'Edi'
    }
    
    const meta = (password, userName) => {
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(users.password === password && users.userName === userName) {
                    resolve('Welcome to Meta')
                }else {
                    reject('Password or login is wrong')
                }
            }, 1000)
        })
    }
    
    const test = async()=> {
        try {
            let user = await meta(678910, 'Edi');
            console.log(user);
        }catch(err) {
            console.log(err);
        }finally{
            console.log('Finished');
        }
    }
    
    test()
    
    
    //Fetch()
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        throw new Error('Page is found');
    })
    .catch((e) => {
        console.log(e);
    })
    
    

    const myAsyncFunc = async () => {
        
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const jsonData = await response.json();
            console.log(jsonData);
            throw new Error('404 is found')
        }catch(err){
            console.log(err);
        }
    }
    
    myAsyncFunc();
    */


