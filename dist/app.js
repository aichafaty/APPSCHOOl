/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scool.js":
/*!**********************!*\
  !*** ./src/scool.js ***!
  \**********************/
/***/ (() => {

eval("// const API_KEY =\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQxODU0MiwiZXhwIjoxOTU0OTk0NTQyfQ.70q4LI1xBt_3AbU7ZecNtRZ_yL7YWQuqAPVbreQCTVg\"\n// const API_URL =\"https://jvbxwslfbvuerjamynbm.supabase.co/rest/v1/senAppn\"\n\nconst API_KEY =\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQxODU0MiwiZXhwIjoxOTU0OTk0NTQyfQ.70q4LI1xBt_3AbU7ZecNtRZ_yL7YWQuqAPVbreQCTVg\"\n\nconst api_URL=\"https://jvbxwslfbvuerjamynbm.supabase.co/rest/v1/apprenantTab\"\n\n        \n    \n    const schoolForm = document.querySelector(\"form\")\n    const apprenantes=document.getElementById(\"apprenantes\")\n    const nom=document.getElementById(\"nom\")\n    //CREATION DU TABLEAU DE D'APPRENAT\n    const APPRENANTS =  []\n    \n    const prenom=document.getElementById(\"prenom\")\n    const niveau=document.getElementById(\"niveau\")\n    const bio=document.getElementById(\"bio\")\n    const ajouter=document.getElementById(\"ajouter\")\n\n    \n\n   \n    let nomSaisi=nom.value\n    let prenomSaisi=prenom.value\n    let niveauSaisi=niveau.value\n    let bioSaisie=bio.value\n\n    \n\n//recuperation des donnees du formulaire\nschoolForm.addEventListener(\"submit\",(e)=>{\n    e.preventDefault()\n    \n    let nomSaisi=nom.value\n    let prenomSaisi=prenom.value\n    let niveauSaisi=niveau.value\n    let bioSaisie=bio.value\n\n    verifier()\n\n    //creation objet etudiant\nlet newApp={\n    nomA:nomSaisi,\n    prenomA:prenomSaisi,\n    niveauA:niveauSaisi,\n    bioA:bioSaisie,\n    //creerAjout:Date.now()\n}\n\n    APPRENANTS.push(newApp)\n    console.log(apprenantes.length)\n    creerUneCarteApp(newApp)\n\n    \n    nom.value=\"\"\n    prenom.value=\"\"\n    niveau.value=\"\"\n    bio.value=\"\"\n\n\n\n})\n   \n\n    const creerUneCarteApp = (apprenante,index) => {\n        const btnSuprimer = \"btn_supprimer-\" + apprenante.id\n        //const btnModifier = \"btn_modifier-\" + apprenante.creerAjout\n        const btnModifier = \"btn_modifier-\" + apprenante.id\n        //const btnCart=\"btn_cart-\" + apprenante.creerAjout\n        const btnCart=\"btn_cart-\" + apprenante.id\n\n        const oldNom=\"identifiant-\" + apprenante.id\n        const oldPrenom=\"identifiant-\" + apprenante.id\n        const oldNiveau=\"identifiant-\" + apprenante.id\n        const oldBio=\"identifiant-\" + apprenante.id\n        \n        apprenantes.insertAdjacentHTML(  \"afterend\",`\n        <div class=\"card mb-3 d-flex \" style=\"max-width: 900px;\" id=\"${btnCart}\">\n                    <div class=\"row g-0\">\n                    <div class=\"col-md-4\">\n                        <img src=\"src/img/ai.png\" class=\"img-fluid rounded-start\" alt=\"...\" style=\"border:radius\">\n                    </div>\n                    <div class=\"col-md-8\">               \n                        <div class=\"card-body\">\n                        <h5 class=\"card-title\" id=${oldNom}>Nom:${apprenante.nomA}</h5>\n                        <h5 class=\"card-tit\" id=${oldPrenom}>Prenom:${apprenante.prenomA}</h5>\n                        <h5 class=\"card-titles\" id=${oldNiveau}>niveau:${apprenante.niveauA}</h5>\n                        <p class=\"card-text\" id=${oldBio}>biographie:${apprenante.bioA}</p>\n\n                        <button type=\"button\" class=\"btn btn-outline-danger\" id=\"${btnSuprimer}\">Supprimer</button>\n                        <button type=\"button\" class=\"btn btn-outline-dark\" id=\"${btnModifier}\">Modifier</button>\n                        </div>\n                        \n                    </div>\n                    </div>\n                    </div>\n\n                   \n      \n     `);\n\n\n     const supprimerBtn=document.getElementById(btnSuprimer)\n     const cartBtn=document.getElementById(btnCart)   \n     const modifierBtn=document.getElementById(btnModifier)\n     console.log(modifierBtn);\n\n        const ancienNom=document.getElementById(oldNom)\n        const ancienPrenom=document.getElementById(oldPrenom)\n        const ancienNiveau=document.getElementById(oldNiveau)\n        const ancienBio=document.getElementById(oldBio)\n\n        \n    supprimerBtn.addEventListener(\"click\",(e)=>{\n        e.preventDefault()\n        console.log(APPRENANTS.splice);\n       let carte=cartBtn\n        carte.remove()\n       // APPRENANTS.splice(index,1)\n    \n\n    }) \n    \n    modifierBtn.addEventListener(\"click\",(e)=>{\n        e.preventDefault()\n        \n        //alert(\"on est le\")\n        const Nom = cartBtn.querySelector(\".card-title\").textContent\n        \n        const nomNew=cartBtn.querySelector(\".card-title\")\n       \n         const Prenom=cartBtn.querySelector(\".card-tit\").textContent\n         const PrenomNew=cartBtn.querySelector(\".card-tit\")\n         \n\n         const Niveau=cartBtn.querySelector(\".card-titles\").textContent\n         const  niveauNew=cartBtn.querySelector(\".card-tit\")\n\n         const Bio=cartBtn.querySelector(\".card-text\").textContent\n        const bioNiew=cartBtn.querySelector(\".card-text\")\n\n\n\n        \n       nom.value=Nom\n       prenom.value=Prenom\n       niveau.value=Niveau\n       bio.value=Bio\n\n       const bouttonModifier=document.getElementById(\"modifier\")\n    \n        console.log(bouttonModifier);\n\n       bouttonModifier.addEventListener(\"click\",(e)=>{\n           e.preventDefault()\n           alert(\"je suis laaa\")\n        // bouttonModifier.classList.add(\"cache\")\n        // ajouter.classList.remove(\"cache\")\n        //apprenante={}\n        apprenante.nomA=nom.value\n        apprenante.prenomA=prenom.value\n        apprenante.niveauA=niveau.value\n        apprenante.bioA=bio.value\n\n        Nom.textContent= apprenante.nomA\n        Prenom.textContent= apprenante.prenomA\n        Niveau.textContent=apprenante.niveauA\n        Bio.textContent= apprenante.bioA\n        \n        console.log(apprenante);\n\n        nom.value = Nom.textContent\n\n\n    //     APPRENANTS.forEach(apprenantes => {\n    //         if (btnModifier.substring(13) == apprenantes.creerAjout) {\n                \n    //             let modification={\n    //                 nomM:nomSaisi,\n    //                 prenomM:prenomSaisi,\n    //                 niveauM:niveauSaisi,\n    //                 bioAM:bioSaisie,\n    //                 creerAjout:Date.now()\n    //             }\n                \n    //             cartBtn.style.display=\"none\"\n    //             creerUneCarteApp(modification)\n                \n\n    //         }\n    //     });    \n      })\n       \n    }) \n   \n\n   }  \n\n  \n sauvegarder=document.getElementById(\"sauv\")\n  \n      sauvegarder.addEventListener(\"click\",(e)=>{\n         e.preventDefault()\n       alert(\"voullez vous vraiment sauvegarder dans la base\")\n           console.log(APPRENANTS);\n\n    \n  //ENVOYER LES DONNEES VERS SUPABASE\n  fetch(api_URL,{\n     method: \"POST\",\n      headers: {\n      apikey: API_KEY,\n      \"Authorization\": \"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjM5NDE4NTQyLCJleHAiOjE5NTQ5OTQ1NDJ9.eCHBLBMBj6Dw21vQQX4cYO_4jQqB2sXaqNAECRqL2C0\",\n   \n      \"Content-Type\": \"application/json\",\n      Prefer: \"return=representation\",\n      },\n      body: JSON.stringify(APPRENANTS),\n  })\n   \n       \n        \n     })\n\n\n     const liste =document.getElementById(\"liste\")\n     liste.addEventListener(\"click\",(e)=>{\n    window.location.href=\"listeApp.html\"\n     })\n \n\nfunction verifier() {\n\n    let nomSaisi=nom.value\n    let prenomSaisi=prenom.value\n    let niveauSaisi=niveau.value\n    let bioSaisie=bio.value\n\n    console.log(\"Nom = \" + nom.value);\n    console.log(\"Prenom = \" + prenom.value);\n    console.log(\"Niveau = \" +niveau.value);\n    console.log(\"Biographie = \" + bio.value);\n\n    localStorage.setItem(\"nom\",nomSaisi)\n    localStorage.setItem(\"prenom\",prenomSaisi)\n    localStorage.setItem(\"niveau\",niveauSaisi)\n    localStorage.setItem(\"bio\", bioSaisie)\n\n    localStorage.getItem(\"nom\")\n    localStorage.getItem(\"prenom\")\n    localStorage.getItem(\"niveau\")\n    localStorage.getItem(\"bio\")\n\n\n\n\n    // console.log(localStorage.getItem(\"nom\"));\n    // console.log(localStorage.getItem(\"prenom\"));\n    // console.log(localStorage.getItem(\"niveau\"));\n    // console.log(localStorage.getItem(\"bio\"));\n\n    \n    \n     // VERIFICATION DES MOTS SAISIS\n    bio.addEventListener(\"input\", (event) => {\n        const longueurMax = 130\n        const contenuSaisi = bio.value\n        const longueurSaisi = contenuSaisi.length\n        const reste = longueurMax - longueurSaisi\n    \n        //actualiser le dom pour afficher le nombre\n        const paragraphCompteur = document.getElementById(\"limite-text\")\n        const compteurText = document.getElementById(\"text-progress\")\n        const restantText = document.getElementById(\"text-restant\")\n        \n        compteurText.textContent = longueurSaisi\n        restantText.textContent = \" Il vous reste \" + reste\n    \n        //changer couleur\n    \n        if (reste < 0) {\n          paragraphCompteur.style.color = \"#ce0033\"\n          ajouter.disabled = true\n        } else if (reste <= 16) {\n          paragraphCompteur.style.color = \"yellow\"\n          ajouter.disabled = false\n        } else {\n          paragraphCompteur.style.color = \"#00000\"\n          ajouter.disabled = false\n        }\n  })\n\n}\n\n// updateBtn.addEventListener(\"click\",()=>{\n//     saveCollectionContainer.classList.add(\"d-none\")\n//     APPRENANTS.forEach((apprenantItem)=>{\n//         if (idUpdate.substring(7) == apprenantItem.index) {\n//             soumissionBtn.style.display=\"block\"\n//             let editInputPrenom = document.getElementById(idPrenom) \n//             let editInputNom = document.getElementById(idNom) \n//             let editInputBio = document.getElementById(idBio) \n//             let editInputMaquette = document.getElementById(idMaquette) \n//             let editInputBdd = document.getElementById(idBdd) \n//             let editInputInterface = document.getElementById(idInterface) \n//             let editInputBackend = document.getElementById(idBackend) \n//             let modifierApprenantForm = document.getElementById(idModifierApprenantForm)\n//             editInputPrenom.removeAttribute('disabled')\n//             editInputNom.removeAttribute('disabled')\n//             editInputNiveau.removeAttribute('disabled')\n//             editInputBio.removeAttribute('disabled')\n//             editInputMaquette.removeAttribute('disabled')\n//             editInputInterface.removeAttribute('disabled')\n//             editInputBdd.removeAttribute('disabled')\n//             editInputBackend.removeAttribute('disabled')\n//             editInputPrenom.focus()\n//             modifierApprenantForm.addEventListener('submit',(e)=>{\n//             e.preventDefault()\n//             if (editInputPrenom.value.trim().length == 0) {\n//               editInputPrenom.classList.add(\"invalid\")\n//               return\n//             }\n//             if (editInputNom.value.trim().length == 0) {\n//               editInputNom.classList.add(\"invalid\")\n//               return\n//             }\n  \n//             if (editInputBio.value.trim().length <8) {\n//                 editInputBio.classList.add(\"invalid\")\n//                 return\n//             }\n//             if (isNaN(editInputMaquette.value) || editInputMaquette.value < 0 ||  editInputMaquette.value >10 || editInputMaquette.value==\"\") {\n//                 editInputMaquette.classList.add(\"invalid\")\n//                 return\n//             }\n//             if (isNaN(editInputInterface.value) || editInputInterface.value < 0 || editInputInterface.value >10 || editInputInterface.value==\"\") {\n//               editInputInterface.classList.add(\"invalid\")\n//                 return\n//             }\n//             if (isNaN(editInputBdd.value) || editInputBdd.value < 0 || editInputBdd.value >10 || editInputBdd.value==\"\") {\n//               editInputBdd.classList.add(\"invalid\")\n//             }\n//             if (isNaN(editInputBackend.value) || editInputBackend.value < 0 || editInputBackend.value >10 || editInputBackend.value==\"\") {\n//               editInputBackend.classList.add(\"invalid\")\n//                 return \n//             }\n//             // CREATION DE L'OBJET APPRENANT MODIFIE\n//             let updateApprenant = {\n//               index: Date.now(),\n//               prenom : editInputPrenom.value,\n//               nom : editInputNom.value,\n//               niveau : editInputNiveau.value,\n//               bio : editInputBio.value,\n//               photo : imgPreview.src,\n//               maquettage : editInputMaquette.value,\n//               interface : editInputInterface.value,\n//               bdd: editInputBdd.value,\n//               backend: editInputBackend.value\n//             }\n//             // AFFECTATION  DU NOUVEL APPRENANT\n//           apprenantItem = updateApprenant\n//           //  DESACTIVATION CHAMP\n//           editInputPrenom.setAttribute('disabled',true)\n//           editInputNom.setAttribute('disabled',true)\n//           editInputNiveau.setAttribute('disabled',true)\n//           editInputBio.setAttribute('disabled',true)\n//           editInputMaquette.setAttribute('disabled',true)\n//           editInputInterface.setAttribute('disabled',true)\n//           editInputBdd.setAttribute('disabled',true)\n//           editInputBackend.setAttribute('disabled',true)\n//           soumissionBtn.style.display=\"none\"\n//           })\n//         }\n        \n//     })\n//     saveCollectionContainer.classList.remove(\"d-none\")\n// })\n\n\n\n\n\n//# sourceURL=webpack://ScoolApp/./src/scool.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scool.js"]();
/******/ 	
/******/ })()
;