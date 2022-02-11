const submitData = document.getElementById('btnsubmit');
const inputname = document.getElementById('nameinp');
const inputtitle = document.getElementById('titleinp');
const datadisplay = document.getElementById('displaybtn');

const dispmessage = document.getElementById('message');



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

//Display data
datadisplay.addEventListener('click', function(){

    

    fetch('http://localhost:3000/posts').then(function (rep) {
            return rep.json()
        }).then(function (data) {
            output(data);
        })

});


 function output(data) {
    dispmessage.innerHTML = "";
    data.forEach(function (el, index) {
        console.log(el);
        let div = document.createElement('div');
        div.innerHTML = `${el.id} <input type="text" value="${el.inputname}">`;
        div.innerHTML += `<input type="text" value="${el.inputtitle}"><button>Update</button>`;
        div.addEventListener('click', function () {
            let temps = div.querySelectorAll('input');
            let updater = div.querySelector('button');
            updater.addEventListener('click', function () {
                updateData(el.id, temps[0].value, temps[1].value);
            })
        })
        dispmessage.appendChild(div);
    });


    function updateData(id, inputname, inputtitle) {
        console.log(id, inputname, inputtitle);
        fetch('http://localhost:3000/posts/' + id, {
            method: 'put'
            , body: JSON.stringify({
                inputname: first
                , inputtitle: last
            })
            , headers: {
                "Content-Type": "application/json"
            }
        }).then(function (res) {
            return res.text();
        }).then(function (data) {
            console.log(data);
        })
    }



}


