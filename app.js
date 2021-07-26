// var main=document.getElementById("main")


// var regex=/(?<==)(.*?)(?=&)/;  
// var link= `https://newsapi.org/v2/everything?q=${query}&from=2021-06-23&sortBy=publishedAt&apiKey=e356dbea5e8f4b38bf34c8ee0ad542d1`;
// function foo(){
//   var search=document.getElementById("srch").value;
//   var newStr = link.replace(regex, search);
//   fetch(newStr)
//   .then(response => response.json())
//   .then(json  =>{     
//     for(var i=0; i<json.articles.length;i++){
//         let card=`<div class="card  col-md-4  col-sm-6 " >
//         <img class="card-img-top width="100%" src="${json.articles[i].urlToImage}" alt="Card image cap">
//         <div class="card-body">
//           <h5 class="card-title">${json.articles[i].author}</h5>
//           <p class="card-text">${json.articles[i].description}</p>
//           <p class="card-text">${json.articles[i].content}</p>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">${json.articles[i].publishedAt}</li>
//         </ul>      
//       </div>`
//       main.innerHTML += card;
//     }
// } )
// }


let main =document.getElementById("main");
let allData;

let getData = (search)=>{
  return new Promise((resolve,reject)=>{
    fetch(`https://newsapi.org/v2/everything?q=${search}&from=2021-06-26&sortBy=publishedAt&apiKey=e17833fa821c47af88ba8930480962b1`)
    .then(data =>data.json())
    .then (data =>{
     resolve(data) 
    })
  })
}

let setData = async()=>{
  let a = await getData("tesla");
  console.log(a)
}

setData()


