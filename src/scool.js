
        
    
    const schoolForm = document.querySelector("form")
    const apprenantes=document.getElementById("apprenantes")
    const nom=document.getElementById("nom")
    //CREATION DU TABLEAU DE D'APPRENAT
    const APPRENANTS =[]
    
    const prenom=document.getElementById("prenom")
    const niveau=document.getElementById("niveau")
    const bio=document.getElementById("bio")
    const ajouter=document.getElementById("ajouter")

   

    

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
        apprenantes.insertAdjacentHTML(  "afterend",`
        <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                    <div class="col-md-4">
                        <img src="src/img/img1.png" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">Nom:${apprenante.nomA}</h5>
                        <h5 class="card-title">Prenom:${apprenante.prenomA}</h5>
                        <h5 class="card-title">niveau:${apprenante.niveauA}</h5>
                        <p class="card-text">${apprenante.bioA}</p>

                        <button type="button" class="btn btn-outline-danger">Supprimer</button>
                        <button type="button" class="btn btn-outline-warning">Modifier</button>
                        </div>
                        
                    </div>
                    </div>
                    </div>

                   
      
     `);

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




    console.log(localStorage.getItem("nom"));
    console.log(localStorage.getItem("prenom"));
    console.log(localStorage.getItem("niveau"));
    console.log(localStorage.getItem("bio"));

    
    
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








