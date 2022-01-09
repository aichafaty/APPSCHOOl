// const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQxODU0MiwiZXhwIjoxOTU0OTk0NTQyfQ.70q4LI1xBt_3AbU7ZecNtRZ_yL7YWQuqAPVbreQCTVg"
// const API_URL ="https://jvbxwslfbvuerjamynbm.supabase.co/rest/v1/senAppn"

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQxODU0MiwiZXhwIjoxOTU0OTk0NTQyfQ.70q4LI1xBt_3AbU7ZecNtRZ_yL7YWQuqAPVbreQCTVg"
const API_URL = "https://jvbxwslfbvuerjamynbm.supabase.co/rest/v1/competenceTab"

const api_URL = "https://jvbxwslfbvuerjamynbm.supabase.co/rest/v1/apprenantTab"



const value1 = document.getElementById("value1")
const value2 = document.getElementById("value2")
const value3 = document.getElementById("value3")
const value4 = document.getElementById("value4")
const value5 = document.getElementById("value5")
const formulaireCompetence=document.getElementById("formulaireCompetence")


function afficherCompetence(competence){
  const compe = document.getElementById("competence")
  compe.insertAdjacentHTML("afterend",
`<label>Maquetter</label> <div class="progress">
<div class="progress-bar progress-bar-striped" role="progressbar"  aria-valuenow="${competence.maquetter}" aria-valuemin="0" aria-valuemax="100" id="$maquette" style=" width:${parseInt(competence.maquetter)}%">${competence.maquetter}</div>
</div><br>
<label>Réaliser une interface utilisateur web </label><div class="progress">
<div class="progress-bar progress-bar-striped bg-success" role="progressbar"  aria-valuenow="${competence.interfaceReal}" aria-valuemin="0" aria-valuemax="100" id="realisation"style=" width:${parseInt(competence.interfaceReal)}%">${competence.interfaceReal}</div>
</div><br>
<label>Créer une base de données</label><div class="progress">
<div class="progress-bar progress-bar-striped bg-info" role="progressbar"  aria-valuenow="${competence.creerBase}" aria-valuemin="0" aria-valuemax="100" id="base" style=" width:${parseInt(competence.creerBase)}%">${competence.creerBase}</div>
</div><br>
<label>Développer la partie back-end</label><div class="progress">
<div class="progress-bar progress-bar-striped bg-warning" role="progressbar"  aria-valuenow="" aria-valuemin="0" aria-valuemax="100" id="developper" style=" width:${parseInt(competence.devAppWeb)}%">${competence.devAppWeb} </div>
</div><br>
<label>Elaborer et mettre en œuvre des composants</label><div class="progress">
<div class="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" id="elaborer" style=" width:${parseInt(competence.elaborerEcommerce)}%">${competence.elaborerEcommerce}</div>
</div>
`)


}


window.addEventListener("DOMContentLoaded", (event) => {

  //RECUPERATION DES DONNEES VIA API

  fetch(api_URL + "?id=eq." + localStorage.getItem("identifiantDetail"), {
      headers: {
        apikey: API_KEY,
      },
    })

    .then((response) => response.json())
    .then((APPRENANTS) => {
      APPRENANTS.forEach((i) => {
        creerUneCarteApp(i)


        // fetch(API_URL+"?id=eq."+localStorage.getItem("identifiantDetail"), {
        //   headers: {
        //     apikey: API_KEY,
        //   },
        // })
        // .then((response) => response.json())
        // .then((competence)=>{
        //   console.log(competence);
        //   creerUneCarteApp(i,competence)
        // })

      })
    })





  function creerUneCarteApp(apprenante) {

    const ajouterC = "btn_cart-" + apprenante.id
    const btnCart = "btn_cart-" + apprenante.id
    const detailler = document.getElementById("det")
    detailler.insertAdjacentHTML("afterend", `
    
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


    const ValiderCompetence = document.getElementById("V_Competence")

    ValiderCompetence.addEventListener("click", () => {
      alert("je suis laaaaaaa")
      let getIdentifiant = localStorage.getItem("identifiantDetail")
      console.log(getIdentifiant);

      //creation objet COMPETENCES
      let newC = {
        maquetter: value1.value,
        interfaceReal: value2.value,
        creerBase: value3.value,
        devAppWeb: value4.value,
        elaborerEcommerce: value5.value,

        id_ApprenantTab: getIdentifiant,


      }
      console.log(newC);

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
        .then((response) => response.json())
        .then((data) => {

          
          competence = data[0]
          afficherCompetence(competence)
    


        })



    })
  }


  //   fetch(API_URL+"?id_ApprenantTab", {
  //     headers: {
  //       apikey: API_KEY,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((newC) => {
  //       // competence.forEach((competence) => {
  //       //     let getId = localStorage.getItem("getIdentifiant");
  //       //     if(competence.id_ApprenantTab == getId){}

  //       // })
  //   console.log(newC);

  // })


  fetch( API_URL + "?id_ApprenantTab=eq." + localStorage.getItem("identifiantDetail"), {
    headers: {
      apikey: API_KEY,
    },
  })
   
    .then((response) => response.json())
    .then((competence) => {
      console.log(competence);
          // let getId = localStorage.getItem("getIdentifiant");
         if(competence.length != 0){
          afficherCompetence(competence[0])
         
         }else{
           formulaireCompetence.style.display="initial"
         }

    })






})