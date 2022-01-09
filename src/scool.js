// const API_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQxODU0MiwiZXhwIjoxOTU0OTk0NTQyfQ.70q4LI1xBt_3AbU7ZecNtRZ_yL7YWQuqAPVbreQCTVg"
// const API_URL ="https://jvbxwslfbvuerjamynbm.supabase.co/rest/v1/senAppn"

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQxODU0MiwiZXhwIjoxOTU0OTk0NTQyfQ.70q4LI1xBt_3AbU7ZecNtRZ_yL7YWQuqAPVbreQCTVg"

const api_URL = "https://jvbxwslfbvuerjamynbm.supabase.co/rest/v1/apprenantTab"



const schoolForm = document.querySelector("form")
const apprenantes = document.getElementById("apprenantes")

//CREATION DU TABLEAU DE D'APPRENAT
const APPRENANTS = []
const nom = document.getElementById("nom")
const prenom = document.getElementById("prenom")
const niveau = document.getElementById("niveau")
const bio = document.getElementById("bio")
const ajouter = document.getElementById("ajouter")
const bouttonModifier = document.getElementById("modifier")
const formulaire = document.getElementById("formulaire")
let nomSaisi = nom.value
let prenomSaisi = prenom.value
let niveauSaisi = niveau.value
let bioSaisie = bio.value



//recuperation des donnees du formulaire
schoolForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let nomSaisi = nom.value
    let prenomSaisi = prenom.value
    let niveauSaisi = niveau.value
    let bioSaisie = bio.value

    verifier()

    //creation objet etudiant
    let newApp = {
        nomA: nomSaisi,
        prenomA: prenomSaisi,
        niveauA: niveauSaisi,
        bioA: bioSaisie,

        //creerAjout:Date.now()
    }

    console.log(apprenantes.length)
    creerUneCarteApp(newApp, APPRENANTS.length)
    APPRENANTS.push(newApp)

 


    nom.value = ""
    prenom.value = ""
    niveau.value = ""
    bio.value = ""



})
//Gestion Button Modifier
console.log(bouttonModifier);

bouttonModifier.addEventListener("click", (e) => {
    e.preventDefault()
    
    //e.target=bouttonMOdifier
    const id = e.target.dataset.id
    const index = e.target.dataset.index
const card = document.getElementById(id)
    console.log(card);  
    //Recuperer les elements de la carte  
    const ancienNom = document.getElementById("nom-" + id)
    const ancienPrenom = document.getElementById("prenom-" + id)
    const ancienNiveau = document.getElementById("niveau-"+id)
    const ancienBio = document.getElementById("bio-"+id)
    //Mettre à jour la carte

    ancienNom.textContent = nom.value
    ancienPrenom.textContent = prenom.value
    ancienNiveau.textContent=niveau.value
    ancienBio.textContent = bio.value
    
    APPRENANTS[index].nomA = nom.value
    APPRENANTS[index].prenomA = prenom.value
    APPRENANTS[index].niveau = niveau.value
    APPRENANTS[index].bioA = bio.value


    //reset permet de vider le formulaire
    formulaire.reset()
    e.target.classList.add("d-none")
    ajouter.classList.remove("d-none")

})

const creerUneCarteApp = (apprenante, index) => {
    const id = new Date().getTime().toString()
    const btnSuprimer = "btn_supprimer-" + id
    const btnModifier = "btn_modifier-" + apprenante.creerAjout
    //const btnModifier = "btn_modifier-" + id
    //const btnCart = "btn_cart-" + apprenante.creerAjout
    const btnCart="btn_cart-" + id

    const oldNom = "nom-" + id
    const oldPrenom = "prenom-" + id
    const oldNiveau = "niveau-" + id
    const oldBio = "bio-" + id

    apprenantes.insertAdjacentHTML("afterend", `
        <div class="card mb-3 d-flex " style="max-width: 900px;" id="${id}">
                    <div class="row g-0">
                    <div class="col-md-4">
                        <img src="./src/img/ai.png" class="img-fluid rounded-start" alt="..." style="border:radius">
                    </div>
                    <div class="col-md-8">               
                        <div class="card-body">
                        <h5 class="card-title" id=${oldNom} >${apprenante.nomA}</h5>
                        <h5 class="card-tit" id=${oldPrenom}>${apprenante.prenomA}</h5>
                        <h5 class="card-titles" id=${oldNiveau}>${apprenante.niveauA}</h5>
                        <p class="card-text" id=${oldBio}>${apprenante.bioA}</p>

                        <button type="button" class="btn btn-outline-danger" id="${btnSuprimer}">Supprimer</button>
                        <button type="button" class="btn btn-outline-dark" id="${btnModifier}">Modifier</button>
                        </div>
                        
                    </div>
                    </div>
                    </div>
          
      
     `);


    const supprimerBtn = document.getElementById(btnSuprimer)
    const cartBtn = document.getElementById(id)
    const modifierBtnCarte = document.getElementById(btnModifier)
    console.log(id);

   


    supprimerBtn.addEventListener("click", (e) => {
        e.preventDefault()
        let carte = cartBtn
        carte.remove()
        APPRENANTS.splice(index,1)
        console.log(APPRENANTS);

    })

    modifierBtnCarte.addEventListener("click", (e) => {
        e.preventDefault()

        ajouter.classList.add('d-none')
        bouttonModifier.classList.remove('d-none')
        
        //<button type="button">Modifier</button>
        bouttonModifier.dataset.id= id
        //<button type="button" data-id="3">Modifier</button>
        bouttonModifier.dataset.index = index
        //<button type="button" data-id="3" data-index="4">Modifier</button>
        //bouttonModifier.dataset
        //{id:3,index:4}

            
        //alert("on est le")
        const Nom = cartBtn.querySelector(".card-title").textContent

        const nomNew = cartBtn.querySelector(".card-title")

        const Prenom = cartBtn.querySelector(".card-tit").textContent
        const PrenomNew = cartBtn.querySelector(".card-tit")

        const Niveau = cartBtn.querySelector(".card-titles").textContent
        const niveauNew = cartBtn.querySelector(".card-tit")

        const Bio = cartBtn.querySelector(".card-text").textContent
        const bioNiew = cartBtn.querySelector(".card-text")

        nom.value = Nom
        prenom.value = Prenom
        niveau.value = Niveau
        bio.value = Bio

        

    })


}


sauvegarder = document.getElementById("sauv")

sauvegarder.addEventListener("click", (e) => {
    e.preventDefault()
    alert("voullez vous vraiment sauvegarder dans la base")
    console.log(APPRENANTS);


    //ENVOYER LES DONNEES VERS SUPABASE
    fetch(api_URL, {
        method: "POST",
        headers: {
            apikey: API_KEY,
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM5NDE4NTQyLCJleHAiOjE5NTQ5OTQ1NDJ9.eCHBLBMBj6Dw21vQQX4cYO_4jQqB2sXaqNAECRqL2C0",
            "Content-Type": "application/json",
            Prefer: "return=representation",
        },
        body: JSON.stringify(APPRENANTS)
    })



})


const liste = document.getElementById("liste")
liste.addEventListener("click", (e) => {
    window.location.href = "listeApp.html"
})


function verifier() {

    let nomSaisi = nom.value
    let prenomSaisi = prenom.value
    let niveauSaisi = niveau.value
    let bioSaisie = bio.value

    console.log("Nom = " + nom.value);
    console.log("Prenom = " + prenom.value);
    console.log("Niveau = " + niveau.value);
    console.log("Biographie = " + bio.value);

    localStorage.setItem("nom", nomSaisi)
    localStorage.setItem("prenom", prenomSaisi)
    localStorage.setItem("niveau", niveauSaisi)
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