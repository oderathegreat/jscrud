fetch('https://randomuser.me/api/?results=3', {

//method and headers
method: 'GET',
headers:{
'Content-Type':'application/json'
}



// body: JSON.stringify( {
//     name: 'Cladina',
//     position : 'Teacher',
//     Author : 'Halfa a Day',
//     Area : 'Nakuru Town'
// })


})
.then(res => {
  //Check if our connection was ok
  if(res.ok) {

     console.log('Response was Ok');

     //return json data
     return res.json();
     


  } else{
    console.log('Not successful');
  }
  
  

})
.then(data => console.log(data))
