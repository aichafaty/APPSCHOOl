const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQxODU0MiwiZXhwIjoxOTU0OTk0NTQyfQ.70q4LI1xBt_3AbU7ZecNtRZ_yL7YWQuqAPVbreQCTVg"
const API_URL ="https://jvbxwslfbvuerjamynbm.supabase.co/rest/v1/senAppn"
        
    
    const schoolForm = document.querySelector("form")
    const apprenantes=document.getElementById("apprenantes")
    const nom=document.getElementById("nom")
    //CREATION DU TABLEAU DE D'APPRENAT
    const APPRENANTS =  []
    
    const prenom=document.getElementById("prenom")
    const niveau=document.getElementById("niveau")
    const bio=document.getElementById("bio")
    const ajouter=document.getElementById("ajouter")

    

   
    let nomSaisi=nom.value
    let prenomSaisi=prenom.value
    let niveauSaisi=niveau.value
    let bioSaisie=bio.value

    

//recuperation des donnees du formulaire
schoolForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    let nomSaisi=nom.value
    let prenomSaisi=prenom.value
    let niveauSaisi=niveau.value
    let bioSaisie=bio.value

    verifier()

    //creation objet etudiant
let newApp={
    nomA:nomSaisi,
    prenomA:prenomSaisi,
    niveauA:niveauSaisi,
    bioA:bioSaisie,
    //creerAjout:Date.now()
}

    APPRENANTS.push(newApp)
    console.log(apprenantes.length)
    creerUneCarteApp(newApp)

    
    nom.value=""
    prenom.value=""
    niveau.value=""
    bio.value=""



})
   

    const creerUneCarteApp = (apprenante,index) => {
        const btnSuprimer = "btn_supprimer-" + apprenante.id
        //const btnModifier = "btn_modifier-" + apprenante.creerAjout
        const btnModifier = "btn_modifier-" + apprenante.id
        //const btnCart="btn_cart-" + apprenante.creerAjout
        const btnCart="btn_cart-" + apprenante.id

        const oldNom="identifiant-" + apprenante.id
        const oldPrenom="identifiant-" + apprenante.id
        const oldNiveau="identifiant-" + apprenante.id
        const oldBio="identifiant-" + apprenante.id
        
        apprenantes.insertAdjacentHTML(  "afterend",`
        <div class="card mb-3 d-flex " style="max-width: 900px;" id="${btnCart}">
                    <div class="row g-0">
                    <div class="col-md-4">
                        <img src="src/img/ai.png" class="img-fluid rounded-start" alt="..." style="border:radius">
                    </div>
                    <div class="col-md-8">               
                        <div class="card-body">
                        <h5 class="card-title" id=${oldNom}>Nom:${apprenante.nomA}</h5>
                        <h5 class="card-tit" id=${oldPrenom}>Prenom:${apprenante.prenomA}</h5>
                        <h5 class="card-titles" id=${oldNiveau}>niveau:${apprenante.niveauA}</h5>
                        <p class="card-text" id=${oldBio}>biographie:${apprenante.bioA}</p>

                        <button type="button" class="btn btn-outline-danger" id="${btnSuprimer}">Supprimer</button>
                        <button type="button" class="btn btn-outline-dark" id="${btnModifier}">Modifier</button>
                        </div>
                        
                    </div>
                    </div>
                    </div>

                   
      
     `);


     const supprimerBtn=document.getElementById(btnSuprimer)
     const cartBtn=document.getElementById(btnCart)   
     const modifierBtn=document.getElementById(btnModifier)
     console.log(modifierBtn);

        const ancienNom=document.getElementById(oldNom)
        const ancienPrenom=document.getElementById(oldPrenom)
        const ancienNiveau=document.getElementById(oldNiveau)
        const ancienBio=document.getElementById(oldBio)

        
    supprimerBtn.addEventListener("click",(e)=>{
        e.preventDefault()
        console.log(APPRENANTS.splice);
       let carte=cartBtn
        carte.remove()
       // APPRENANTS.splice(index,1)
    

    }) 
    
    modifierBtn.addEventListener("click",(e)=>{
        e.preventDefault()
        
        //alert("on est le")
        const Nom = cartBtn.querySelector(".card-title").textContent
        
        const nomNew=cartBtn.querySelector(".card-title")
       
         const Prenom=cartBtn.querySelector(".card-tit").textContent
         const PrenomNew=cartBtn.querySelector(".card-tit")
         

         const Niveau=cartBtn.querySelector(".card-titles").textContent
         const  niveauNew=cartBtn.querySelector(".card-tit")

         const Bio=cartBtn.querySelector(".card-text").textContent
        const bioNiew=cartBtn.querySelector(".card-text")



        
       nom.value=Nom
       prenom.value=Prenom
       niveau.value=Niveau
       bio.value=Bio

       const bouttonModifier=document.getElementById("modifier")
    
        console.log(bouttonModifier);

       bouttonModifier.addEventListener("click",(e)=>{
           e.preventDefault()
           alert("je suis laaa")
        // bouttonModifier.classList.add("cache")
        // ajouter.classList.remove("cache")
        //apprenante={}
        apprenante.nomA=nom.value
        apprenante.prenomA=prenom.value
        apprenante.niveauA=niveau.value
        apprenante.bioA=bio.value

        Nom.textContent= apprenante.nomA
        Prenom.textContent= apprenante.prenomA
        Niveau.textContent=apprenante.niveauA
        Bio.textContent= apprenante.bioA
        
        console.log(apprenante);

        nom.value = Nom.textContent


    //     APPRENANTS.forEach(apprenantes => {
    //         if (btnModifier.substring(13) == apprenantes.creerAjout) {
                
    //             let modification={
    //                 nomM:nomSaisi,
    //                 prenomM:prenomSaisi,
    //                 niveauM:niveauSaisi,
    //                 bioAM:bioSaisie,
    //                 creerAjout:Date.now()
    //             }
                
    //             cartBtn.style.display="none"
    //             creerUneCarteApp(modification)
                

    //         }
    //     });    
      })
       
    }) 
   

   }  

  
 sauvegarder=document.getElementById("sauv")
  
      sauvegarder.addEventListener("click",(e)=>{
         e.preventDefault()
       alert("voullez vous vraiment sauvegarder dans la base")
           console.log(APPRENANTS);

    
  //ENVOYER LES DONNEES VERS SUPABASE
  fetch(API_URL,{
     method: "POST",
      headers: {
      apikey: API_KEY,
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM5NDE4NTQyLCJleHAiOjE5NTQ5OTQ1NDJ9.eCHBLBMBj6Dw21vQQX4cYO_4jQqB2sXaqNAECRqL2C0",
      "Content-Type": "application/json",
      Prefer: "return=representation",
      },
      body: JSON.stringify(APPRENANTS),
  })
   
       
        
     })


     const liste =document.getElementById("liste")
     liste.addEventListener("click",(e)=>{
    window.location.href="listeApp.html"
     })
 

function verifier() {

    let nomSaisi=nom.value
    let prenomSaisi=prenom.value
    let niveauSaisi=niveau.value
    let bioSaisie=bio.value

    console.log("Nom = " + nom.value);
    console.log("Prenom = " + prenom.value);
    console.log("Niveau = " +niveau.value);
    console.log("Biographie = " + bio.value);

    localStorage.setItem("nom",nomSaisi)
    localStorage.setItem("prenom",prenomSaisi)
    localStorage.setItem("niveau",niveauSaisi)
    localStorage.setItem("bio", bioSaisie)

    localStorage.getItem("nom")
    localStorage.getItem("prenom")
    localStorage.getItem("niveau")
    localStorage.getItem("bio")




    // console.log(localStorage.getItem("nom"));
    // console.log(localStorage.getItem("prenom"));
    // console.log(localStorage.getItem("niveau"));
    // console.log(localStorage.getItem("bio"));

    
    
     // VERIFICATION DES MOTS SAISIS
    bio.addEventListener("input", (event) => {
        const longueurMax = 130
        const contenuSaisi = bio.value
        const longueurSaisi = contenuSaisi.length
        const reste = longueurMax - longueurSaisi
    
        //actualiser le dom pour afficher le nombre
        const paragraphCompteur = document.getElementById("limite-text")
        const compteurText = document.getElementById("text-progress")
        const restantText = document.getElementById("text-restant")
        
        compteurText.textContent = longueurSaisi
        restantText.textContent = " Il vous reste " + reste
    
        //changer couleur
    
        if (reste < 0) {
          paragraphCompteur.style.color = "#ce0033"
          ajouter.disabled = true
        } else if (reste <= 16) {
          paragraphCompteur.style.color = "yellow"
          ajouter.disabled = false
        } else {
          paragraphCompteur.style.color = "#00000"
          ajouter.disabled = false
        }
  })

}

// updateBtn.addEventListener("click",()=>{
//     saveCollectionContainer.classList.add("d-none")
//     APPRENANTS.forEach((apprenantItem)=>{
//         if (idUpdate.substring(7) == apprenantItem.index) {
//             soumissionBtn.style.display="block"
//             let editInputPrenom = document.getElementById(idPrenom) 
//             let editInputNom = document.getElementById(idNom) 
//             let editInputBio = document.getElementById(idBio) 
//             let editInputMaquette = document.getElementById(idMaquette) 
//             let editInputBdd = document.getElementById(idBdd) 
//             let editInputInterface = document.getElementById(idInterface) 
//             let editInputBackend = document.getElementById(idBackend) 
//             let modifierApprenantForm = document.getElementById(idModifierApprenantForm)
//             editInputPrenom.removeAttribute('disabled')
//             editInputNom.removeAttribute('disabled')
//             editInputNiveau.removeAttribute('disabled')
//             editInputBio.removeAttribute('disabled')
//             editInputMaquette.removeAttribute('disabled')
//             editInputInterface.removeAttribute('disabled')
//             editInputBdd.removeAttribute('disabled')
//             editInputBackend.removeAttribute('disabled')
//             editInputPrenom.focus()
//             modifierApprenantForm.addEventListener('submit',(e)=>{
//             e.preventDefault()
//             if (editInputPrenom.value.trim().length == 0) {
//               editInputPrenom.classList.add("invalid")
//               return
//             }
//             if (editInputNom.value.trim().length == 0) {
//               editInputNom.classList.add("invalid")
//               return
//             }
  
//             if (editInputBio.value.trim().length <8) {
//                 editInputBio.classList.add("invalid")
//                 return
//             }
//             if (isNaN(editInputMaquette.value) || editInputMaquette.value < 0 ||  editInputMaquette.value >10 || editInputMaquette.value=="") {
//                 editInputMaquette.classList.add("invalid")
//                 return
//             }
//             if (isNaN(editInputInterface.value) || editInputInterface.value < 0 || editInputInterface.value >10 || editInputInterface.value=="") {
//               editInputInterface.classList.add("invalid")
//                 return
//             }
//             if (isNaN(editInputBdd.value) || editInputBdd.value < 0 || editInputBdd.value >10 || editInputBdd.value=="") {
//               editInputBdd.classList.add("invalid")
//             }
//             if (isNaN(editInputBackend.value) || editInputBackend.value < 0 || editInputBackend.value >10 || editInputBackend.value=="") {
//               editInputBackend.classList.add("invalid")
//                 return 
//             }
//             // CREATION DE L'OBJET APPRENANT MODIFIE
//             let updateApprenant = {
//               index: Date.now(),
//               prenom : editInputPrenom.value,
//               nom : editInputNom.value,
//               niveau : editInputNiveau.value,
//               bio : editInputBio.value,
//               photo : imgPreview.src,
//               maquettage : editInputMaquette.value,
//               interface : editInputInterface.value,
//               bdd: editInputBdd.value,
//               backend: editInputBackend.value
//             }
//             // AFFECTATION  DU NOUVEL APPRENANT
//           apprenantItem = updateApprenant
//           //  DESACTIVATION CHAMP
//           editInputPrenom.setAttribute('disabled',true)
//           editInputNom.setAttribute('disabled',true)
//           editInputNiveau.setAttribute('disabled',true)
//           editInputBio.setAttribute('disabled',true)
//           editInputMaquette.setAttribute('disabled',true)
//           editInputInterface.setAttribute('disabled',true)
//           editInputBdd.setAttribute('disabled',true)
//           editInputBackend.setAttribute('disabled',true)
//           soumissionBtn.style.display="none"
//           })
//         }
        
//     })
//     saveCollectionContainer.classList.remove("d-none")
// })



