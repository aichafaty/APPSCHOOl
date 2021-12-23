window.addEventListener("load",function() {
        
    
    const schoolForm = document.querySelector("form")
    const apprenantes=document.getElementById("apprenantes")
    const nom=document.getElementById("nom")
    
    const prenom=document.getElementById("prenom")
    const select=document.getElementById("select")
    const bio=document.getElementById("bio")
    const ajouter=document.getElementById("ajouter")


    const creerUneCarteApp = () => {
        apprenantes.insertAdjacentHTML(  "afterend",`
        <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                    <div class="col-md-4">
                        <img src="src/img/img1.png" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">Nom:</h5>
                        <h5 class="card-title">Prenom:</h5>
                        <h5 class="card-title">niveau:</h5>
                        <p class="card-text"></p>
                       
                        </div>
                    </div>
                    </div>
                    </div>
      
     `);

   }
   creerUneCarteApp()

//recuperation des donnees du formulaire
schoolForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    verifier()
})

function verifier() {
    let nomSaisi=nom.value.trim()
    let prenomSaisi=prenom.value.trim()
    let niveauSaisi=select.value.trim()
    let bioSaisie=bio.value.trim()

    console.log("Nom = " + nomSaisi);
    console.log("Prenom = " + prenomSaisi);
    console.log("Niveau = " +niveauSaisi);
    console.log("Biographie = " + bioSaisie);

}



//     // // VERIFICATION DES MOTS SAISIS
//     // inputSuggestion.addEventListener("input", (event) => {
//     //     const longueurMax = 130
//     //     const contenuSaisi = inputSuggestion.value
//     //     const longueurSaisi = contenuSaisi.length
//     //     const reste = longueurMax - longueurSaisi
    
//     //     //actualiser le dom pour afficher le nombre
//     //     const paragraphCompteur = document.getElementById("limite-text")
//     //     const compteurText = document.getElementById("text-progress")
//     //     const restantText = document.getElementById("text-restant")
//     //     const btnSuggestion = document.getElementById("btn-suggestion")
//     //     compteurText.textContent = longueurSaisi
//     //     restantText.textContent = " Il vous reste " + reste
    
//     //     //changer couleur
    
//     //     if (reste < 0) {
//     //       paragraphCompteur.style.color = "#ce0033"
//     //       btnSuggestion.disabled = true
//     //     } else if (reste <= 16) {
//     //       paragraphCompteur.style.color = "yellow"
//     //       btnSuggestion.disabled = false
//     //     } else {
//     //       paragraphCompteur.style.color = "#00000"
//     //       btnSuggestion.disabled = false
//     //     }
//     //   })


})
