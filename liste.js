const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQxODU0MiwiZXhwIjoxOTU0OTk0NTQyfQ.70q4LI1xBt_3AbU7ZecNtRZ_yL7YWQuqAPVbreQCTVg"
const API_URL ="https://jvbxwslfbvuerjamynbm.supabase.co/rest/v1/senAppn"

// fetch(API_URL,"?select=*",{
//     method: "GET",
//      headers: {
//      apikey: API_KEY,
//      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM5NDE4NTQyLCJleHAiOjE5NTQ5OTQ1NDJ9.eCHBLBMBj6Dw21vQQX4cYO_4jQqB2sXaqNAECRqL2C0",
//      "Content-Type": "application/json",
//      Prefer: "return=representation",
//      }
//         .then((response) => response.json())
//         .then((APPRENANTS) => {
//           APPRENANTS.forEach((i) =>
//            creerUneCarteApp(i))

          
//           })

//  })



window.addEventListener("DOMContentLoaded", (event) => {
  //RECUPERATION DES DONNEES VIA API
  fetch(API_URL, {
    headers: {
      apikey: API_KEY,
    },
  })
   
  .then((response) => response.json())
  .then((APPRENANTS) => {
    APPRENANTS.forEach((i) => {
      creerUneCarteApp(i)
    })
  })
})
 
  

function creerUneCarteApp (apprenante){
  
  const btnDetail = "btn_detail-" + apprenante.id
  const btnCart="btn_cart-" + apprenante.id

  
  console.log(btnDetail);
  listeApp.insertAdjacentHTML(  "afterend",`
  <div class="card mb-3" style="max-width: 540px;" id="${btnCart}">
              <div class="row g-0">
              <div class="col-md-4">
                  <img src="src/img/img1.png" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                  <div class="card-body">
                  <h5 class="card-title" id=${apprenante.nomA}>Nom:${apprenante.nomA}</h5>
                  <h5 class="card-tit" id=${apprenante.prenomA}>Prenom:${apprenante.prenomA}</h5>
                  <h5 class="card-titles" id=${apprenante.niveauA}>niveau:${apprenante.niveauA}</h5>
                  <p class="card-text" id=${apprenante.bioA}>biographie:${apprenante.bioA}</p>

                 
                  <button type="submit" class="btn btn-outline-warning" id="${btnDetail}">detail</button>
                  </div>
                  
              </div>
              </div>
              </div>

             

`)

const detail=document.getElementById(btnDetail)
detail.addEventListener("click",(e)=>{
console.log(detail);
window.location.href="detail.html"

})
}


