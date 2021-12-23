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

eval("\n        \n    \n    const schoolForm = document.querySelector(\"form\")\n    const apprenantes=document.getElementById(\"apprenantes\")\n    const nom=document.getElementById(\"nom\")\n    //CREATION DU TABLEAU DE D'APPRENAT\n    const APPRENANTS =[]\n    \n    const prenom=document.getElementById(\"prenom\")\n    const niveau=document.getElementById(\"niveau\")\n    const bio=document.getElementById(\"bio\")\n    const ajouter=document.getElementById(\"ajouter\")\n\n   \n\n    \n\n//recuperation des donnees du formulaire\nschoolForm.addEventListener(\"submit\",(e)=>{\n    e.preventDefault()\n    \n\n    let nomSaisi=nom.value\n    let prenomSaisi=prenom.value\n    let niveauSaisi=niveau.value\n    let bioSaisie=bio.value\n\n    verifier()\n\n\n\n\n\n    //creation objet etudiant\nlet newApp={\n    nomA:nomSaisi,\n    prenomA:prenomSaisi,\n    niveauA:niveauSaisi,\n    bioA:bioSaisie,\n}\n\n    APPRENANTS.push(newApp)\n    console.log(apprenantes.length)\n    creerUneCarteApp(newApp)\n\n\n   \n    \n\n})\n\n    const creerUneCarteApp = (apprenante) => {\n        apprenantes.insertAdjacentHTML(  \"afterend\",`\n        <div class=\"card mb-3\" style=\"max-width: 540px;\">\n                    <div class=\"row g-0\">\n                    <div class=\"col-md-4\">\n                        <img src=\"src/img/img1.png\" class=\"img-fluid rounded-start\" alt=\"...\">\n                    </div>\n                    <div class=\"col-md-8\">\n                        <div class=\"card-body\">\n                        <h5 class=\"card-title\">Nom:${apprenante.nomA}</h5>\n                        <h5 class=\"card-title\">Prenom:${apprenante.prenomA}</h5>\n                        <h5 class=\"card-title\">niveau:${apprenante.niveauA}</h5>\n                        <p class=\"card-text\">${apprenante.bioA}</p>\n\n                        <button type=\"button\" class=\"btn btn-outline-danger\">Supprimer</button>\n                        <button type=\"button\" class=\"btn btn-outline-warning\">Modifier</button>\n                        </div>\n                        \n                    </div>\n                    </div>\n                    </div>\n\n                   \n      \n     `);\n\n   }  \n\n\nfunction verifier() {\n\n    let nomSaisi=nom.value\n    let prenomSaisi=prenom.value\n    let niveauSaisi=niveau.value\n    let bioSaisie=bio.value\n\n    console.log(\"Nom = \" + nom.value);\n    console.log(\"Prenom = \" + prenom.value);\n    console.log(\"Niveau = \" +niveau.value);\n    console.log(\"Biographie = \" + bio.value);\n\n    localStorage.setItem(\"nom\",nomSaisi)\n    localStorage.setItem(\"prenom\",prenomSaisi)\n    localStorage.setItem(\"niveau\",niveauSaisi)\n    localStorage.setItem(\"bio\", bioSaisie)\n\n    localStorage.getItem(\"nom\")\n    localStorage.getItem(\"prenom\")\n    localStorage.getItem(\"niveau\")\n    localStorage.getItem(\"bio\")\n\n\n\n\n    console.log(localStorage.getItem(\"nom\"));\n    console.log(localStorage.getItem(\"prenom\"));\n    console.log(localStorage.getItem(\"niveau\"));\n    console.log(localStorage.getItem(\"bio\"));\n\n    \n    \n     // VERIFICATION DES MOTS SAISIS\n    bio.addEventListener(\"input\", (event) => {\n        const longueurMax = 130\n        const contenuSaisi = bio.value\n        const longueurSaisi = contenuSaisi.length\n        const reste = longueurMax - longueurSaisi\n    \n        //actualiser le dom pour afficher le nombre\n        const paragraphCompteur = document.getElementById(\"limite-text\")\n        const compteurText = document.getElementById(\"text-progress\")\n        const restantText = document.getElementById(\"text-restant\")\n        \n        compteurText.textContent = longueurSaisi\n        restantText.textContent = \" Il vous reste \" + reste\n    \n        //changer couleur\n    \n        if (reste < 0) {\n          paragraphCompteur.style.color = \"#ce0033\"\n          ajouter.disabled = true\n        } else if (reste <= 16) {\n          paragraphCompteur.style.color = \"yellow\"\n          ajouter.disabled = false\n        } else {\n          paragraphCompteur.style.color = \"#00000\"\n          ajouter.disabled = false\n        }\n  })\n\n}\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://ScoolApp/./src/scool.js?");

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