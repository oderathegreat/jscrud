const submitData = document.getElementById('btnsubmit');
const inputname = document.getElementById('nameinp');
const inputtitle = document.getElementById('titleinp');

//Event trigger for submit data

submitData.addEventListener('click', function() {

 //url is local json server   
    fetch('http://localhost:3000/posts', {
//method and headers
method: 'POST',
body : JSON.stringify({
   title: inputtitle.value,
   name : inputname.value
}),

headers:{
'Content-Type':'application/json'
}

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



});