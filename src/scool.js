
        
    
    const schoolForm = document.querySelector("form")
    const apprenantes=document.getElementById("apprenantes")
    const nom=document.getElementById("nom")
    //CREATION DU TABLEAU DE D'APPRENAT
    const APPRENANTS =[]
    
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
}

    APPRENANTS.push(newApp)
    console.log(apprenantes.length)
    creerUneCarteApp(newApp)


   
    

})
   

    const creerUneCarteApp = (apprenante) => {
        const btnSuprimer = "btn_supprimer-" + apprenante.id
        const btnModifier = "btn_modifier-" + apprenante.id
        const btnCart="btn_cart-" + apprenante.id

        const oldNom="identifiant-" + apprenante.id
        const oldPrenom="identifiant-" + apprenante.id
        const oldNiveau="identifiant-" + apprenante.id
        const oldBio="identifiant-" + apprenante.id
        
        apprenantes.insertAdjacentHTML(  "afterend",`
        <div class="card mb-3" style="max-width: 540px;" id="${btnCart}">
                    <div class="row g-0">
                    <div class="col-md-4">
                        <img src="src/img/img1.png" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title" id=${oldNom}>Nom:${apprenante.nomA}</h5>
                        <h5 class="card-titl" id=${oldPrenom}>Prenom:${apprenante.prenomA}</h5>
                        <h5 class="card-titl" id=${oldNiveau}>niveau:${apprenante.niveauA}</h5>
                        <p class="card-text" id=${oldBio}>biographie:${apprenante.bioA}</p>

                        <button type="button" class="btn btn-outline-danger" id="${btnSuprimer}">Supprimer</button>
                        <button type="button" class="btn btn-outline-warning" id="${btnModifier}">Modifier</button>
                        </div>
                        
                    </div>
                    </div>
                    </div>

                   
      
     `);


     const supprimerBtn=document.getElementById(btnSuprimer)
     const cartBtn=document.getElementById(btnCart)   
     const modifierBtn=document.getElementById(btnModifier)

  const ancienNom=document.getElementById(oldNom)
  const ancienPrenom=document.getElementById(oldPrenom)
  const ancienNiveau=document.getElementById(oldNiveau)
  const ancienBio=document.getElementById(oldBio)


    supprimerBtn.addEventListener("click",(e)=>{
        e.preventDefault()
        
       let carte=cartBtn
        carte.remove()
    

    }) 
    modifierBtn.addEventListener("click",(e)=>{
        e.preventDefault()
        alert("on est le")
        let nomMod = document.createElement('input')
        nomMod.setAttribute("placeholder", "nom*")
        cartBtn.appendChild(nomMod)
        cartBtn.appendChild(ancienNom)
       

        let prenomMod=document.createElement('input')
        prenomMod.setAttribute("placeholder", "prenom*")
        cartBtn.appendChild(prenomMod)
        cartBtn.appendChild(ancienPrenom)

        //  let niveauMod=document.createElement('select')
        //  niveauMod.setAttribute("select*")
        //  cartBtn.appendChild(ancienNiveau)

        let Biographie=document.createElement('textarea')
       Biographie.setAttribute("placeholder", "texterea*")
        cartBtn.appendChild(Biographie)

        cartBtn.appendChild(ancienBio)
        
        
        
        
        
        let cartMod=cartBtn
        console.log(cartMod);
        cartMod.replaceChild(nomMod,ancienNom)
        // cartMod.replaceChild(prenomMod,ancienPrenom)
        // cartMod.replaceChild(niveauMod,ancienNiveau)
        // cartMod.replaceChild(Biographie,ancienBio)


       
        
        // console.log(cartMod);

    }) 


   }  




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





