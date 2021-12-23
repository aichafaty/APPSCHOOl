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

eval("window.addEventListener(\"load\",function() {\n        \n    \n    const schoolForm = document.querySelector(\"form\")\n    const apprenantes=document.getElementById(\"apprenantes\")\n    const nom=document.getElementById(\"nom\")\n    \n    const prenom=document.getElementById(\"prenom\")\n    const select=document.getElementById(\"select\")\n    const bio=document.getElementById(\"bio\")\n    const ajouter=document.getElementById(\"ajouter\")\n\n\n    const creerUneCarteApp = () => {\n        apprenantes.insertAdjacentHTML(  \"afterend\",`\n        <div class=\"card mb-3\" style=\"max-width: 540px;\">\n                    <div class=\"row g-0\">\n                    <div class=\"col-md-4\">\n                        <img src=\"src/img/img1.png\" class=\"img-fluid rounded-start\" alt=\"...\">\n                    </div>\n                    <div class=\"col-md-8\">\n                        <div class=\"card-body\">\n                        <h5 class=\"card-title\">Nom:</h5>\n                        <h5 class=\"card-title\">Prenom:</h5>\n                        <h5 class=\"card-title\">niveau:</h5>\n                        <p class=\"card-text\"></p>\n                       \n                        </div>\n                    </div>\n                    </div>\n                    </div>\n      \n     `);\n\n   }\n   creerUneCarteApp()\n\n//recuperation des donnees du formulaire\nschoolForm.addEventListener(\"submit\",(e)=>{\n    e.preventDefault()\n\n    verifier()\n})\n\nfunction verifier() {\n    let nomSaisi=nom.value.trim()\n    let prenomSaisi=prenom.value.trim()\n    let niveauSaisi=select.value.trim()\n    let bioSaisie=bio.value.trim()\n\n    console.log(\"Nom = \" + nomSaisi);\n    console.log(\"Prenom = \" + prenomSaisi);\n    console.log(\"Niveau = \" +niveauSaisi);\n    console.log(\"Biographie = \" + bioSaisie);\n\n}\n\n\n\n//     // // VERIFICATION DES MOTS SAISIS\n//     // inputSuggestion.addEventListener(\"input\", (event) => {\n//     //     const longueurMax = 130\n//     //     const contenuSaisi = inputSuggestion.value\n//     //     const longueurSaisi = contenuSaisi.length\n//     //     const reste = longueurMax - longueurSaisi\n    \n//     //     //actualiser le dom pour afficher le nombre\n//     //     const paragraphCompteur = document.getElementById(\"limite-text\")\n//     //     const compteurText = document.getElementById(\"text-progress\")\n//     //     const restantText = document.getElementById(\"text-restant\")\n//     //     const btnSuggestion = document.getElementById(\"btn-suggestion\")\n//     //     compteurText.textContent = longueurSaisi\n//     //     restantText.textContent = \" Il vous reste \" + reste\n    \n//     //     //changer couleur\n    \n//     //     if (reste < 0) {\n//     //       paragraphCompteur.style.color = \"#ce0033\"\n//     //       btnSuggestion.disabled = true\n//     //     } else if (reste <= 16) {\n//     //       paragraphCompteur.style.color = \"yellow\"\n//     //       btnSuggestion.disabled = false\n//     //     } else {\n//     //       paragraphCompteur.style.color = \"#00000\"\n//     //       btnSuggestion.disabled = false\n//     //     }\n//     //   })\n\n\n})\n\n\n//# sourceURL=webpack://ScoolApp/./src/scool.js?");

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