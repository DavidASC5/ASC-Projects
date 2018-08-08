let url = "https://randomuser.me/api"
let data;

function printJson(response) {
    return response.json();
  
};

  fetch(url)
  .then(printJson)
  .then(function(myJson){
      const email = myJson.results[0].email
      const p = document.createElement("p");
      p.innerHTML = email;      
      document.body.appendChild(p);
  
      data = myJson;
    });

  console.log(data);