// const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQxODU0MiwiZXhwIjoxOTU0OTk0NTQyfQ.70q4LI1xBt_3AbU7ZecNtRZ_yL7YWQuqAPVbreQCTVg"
// const API_URL ="https://jvbxwslfbvuerjamynbm.supabase.co/rest/v1/senAppn"

const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQxODU0MiwiZXhwIjoxOTU0OTk0NTQyfQ.70q4LI1xBt_3AbU7ZecNtRZ_yL7YWQuqAPVbreQCTVg"
const API_URL="https://jvbxwslfbvuerjamynbm.supabase.co/rest/v1/competenceTab"

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
  
    const ajouterC="btn_cart-" + apprenante.id
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

                <label>Maquetter</label> <div class="progress">
  <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div><br>
<label>Réaliser une interface utilisateur web </label><div class="progress">
  <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div><br>
<label>Créer une base de données</label><div class="progress">
  <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div><br>
<label>Développer la partie back-end</label><div class="progress">
  <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div><br>
<label>Elaborer et mettre en œuvre des composants</label><div class="progress">
  <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>

            </div>
            </div>
            </div>
          
             

`)

const ValiderCompetence= document.getElementById("V_Competence")

ValiderCompetence.addEventListener("click",()=>{
    alert("je suis laaaaaaa")
    let getIdentifiant=localStorage.getItem("identifiantDetail")
    console.log(getIdentifiant);

     //creation objet COMPETENCES
let newC={
  maquetter:value1.value,
  interfaceReal:value2.value,
  creerBase:value3.value,
  devAppWeb:value4.value,
  elaborerEcommerce:value5.value,

  id_ApprenantTab:getIdentifiant,

  
}

  
 //ENVOYER LES DONNEES VERS SUPABASE
 fetch(API_URL, {
  method: "POST",
  headers: {
    apikey: API_KEY,
    "Content-Type": "application/json",
    Prefer: "return=representation",
  },
  body: JSON.stringify(newC),
 
})



  })
  }
  
  
})


  