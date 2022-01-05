// const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQxODU0MiwiZXhwIjoxOTU0OTk0NTQyfQ.70q4LI1xBt_3AbU7ZecNtRZ_yL7YWQuqAPVbreQCTVg"
// const API_URL ="https://jvbxwslfbvuerjamynbm.supabase.co/rest/v1/senAppn"

const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQxODU0MiwiZXhwIjoxOTU0OTk0NTQyfQ.70q4LI1xBt_3AbU7ZecNtRZ_yL7YWQuqAPVbreQCTVg"
//const API_URL="https://jvbxwslfbvuerjamynbm.supabase.co/rest/v1/competenceTab"

const api_URL="https://jvbxwslfbvuerjamynbm.supabase.co/rest/v1/apprenantTab"



window.addEventListener("DOMContentLoaded", (event) => {
    //RECUPERATION DES DONNEES VIA API
    
    fetch(api_URL+"?id=eq."+localStorage.getItem("identifiantDetail"), {
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


  function creerUneCarteApp (apprenante){
  
    
    const btnCart="btn_cart-" + apprenante.id
    const detailler=document.getElementById("det")
  detailler.insertAdjacentHTML(  "afterend",`
  
  <div class="card mb-3" style="max-width: 900px;" id="${btnCart}">
            <div class="row g-0">
            <div class="col-md-4">
                <img src="src/img/ai.png" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title" id=${apprenante.nomA}>Nom:${apprenante.nomA}</h5>
                <h5 class="card-tit" id=${apprenante.prenomA}>Prenom:${apprenante.prenomA}</h5>
                <h5 class="card-titles" id=${apprenante.niveauA}>niveau:${apprenante.niveauA}</h5>
                <p class="card-text" id=${apprenante.bioA}>biographie:${apprenante.bioA}</p>
          
            </div>
            </div>
            </div>
          
             

`)
  }

})


  