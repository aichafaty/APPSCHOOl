const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQxODU0MiwiZXhwIjoxOTU0OTk0NTQyfQ.70q4LI1xBt_3AbU7ZecNtRZ_yL7YWQuqAPVbreQCTVg"
const API_URL ="https://jvbxwslfbvuerjamynbm.supabase.co/rest/v1/senAppn"



window.addEventListener("DOMContentLoaded", (event) => {
    //RECUPERATION DES DONNEES VIA API
    
    fetch(API_URL+"?id=eq."+localStorage.getItem("identifiantDetail"), {
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
  
    
    const btnCart="btn_cart-" + apprenante.id
    const detailler=document.getElementById("detailler")
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
          
                <div class=" rom" >
                    <div  class="gauche">
                      <label for="file" class="libele"> :${apprenante.competences1}<br>
                      <progress id="file" max="200" value="90" class="barre">${apprenante.competences1_Value} </progress></label><br>

                      <label for="file " class=" libele">${apprenante.competences2} <br>
                      <progress id="file" max="100" value="80"class="barre"> ${apprenante.competences2_Value} </progress></label>

                    </div>
                      <div class="droite ">
                        <label for="file" class=" libele">${apprenante.competences3}<br>
                        <progress id="file" max="100" value="70" class="barre"> ${apprenante.competences3_Value}</progress></label> <br>
                        <label for="file" class=" libele">${apprenante.competences4}<br>
          
                        <progress id="file" max="100" value="50" class="barre">${apprenante.competences4_Value} </progress></label>
                    </div>
                    <div class="droite ">
                        
                        <label for="file" class=" libele">${apprenante.competences5}<br>
          
                        <progress id="file" max="100" value="50" class="barre"> ${apprenante.competences5_Value}</progress></label>
                    </div>
          
                         
                </div>
                
            </div>
            </div>
            </div>
          
             

`)
  }