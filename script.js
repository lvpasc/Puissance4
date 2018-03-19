var tr; // stocker les tr en get byid
var td;
var jeton;
var player = false; // true = yellow ; false = red;
var columnClicked = 3;


var couleurJoueur ="red"; // Premier joueur à jouer sera le rouge


gridInit();
createGameLine();
document.getElementById("j" + " " + 3).className = couleurJoueur; // on place jeton rouge dans le header au milieu

document.onkeydown = play;


function play(e) {

  
  e = e || window.event;

  var coupJoue = false;

  var previousHorizontal = columnClicked - 1;
  var nextHorizontal = columnClicked + 1;

  var diffColonne = 5;

  var isPathing = true;
  var Count = 1;
  var nextVertical = diffColonne + 1;
  var previousVertical = diffColonne - 1;


  

 

    

    if (e.keyCode == '39') {
      document.getElementById("j" + " " + columnClicked).className = "white";
      columnClicked += 1;
      if (columnClicked == 7) {
        columnClicked = 0;
      }
      document.getElementById("j" + " " + columnClicked).className = couleurJoueur;
    }
    if (e.keyCode == '37') {
      document.getElementById("j" + " " + columnClicked).className = "white";
      columnClicked -= 1;
      if (columnClicked == -1) {
        columnClicked = 6;
      }
      document.getElementById("j" + " " + columnClicked).className = couleurJoueur;
    }


      /*if (!coupJoue && document.getElementById(diffColonne + " " + columnClicked).firstChild.className == "white") {
        if (player) {
          document.getElementById(diffColonne + " " + columnClicked).firstChild.className = "yellow"
          player = false;
        } else {
          document.getElementById(diffColonne + " " + columnClicked).firstChild.className = "red"
          player = true;
        }
        coupJoue = true;
      } else {
        diffColonne -= 1;
      }
    }*/
    
    // vers la Droite
    if (e.keyCode == '13') {
      while (!coupJoue) {
      if (!coupJoue && document.getElementById(diffColonne + " " + columnClicked).firstChild.className == "white") {
      if (player) {
        document.getElementById(diffColonne + " " + columnClicked).firstChild.className = "yellow"
        couleurJoueur = "red";
        //document.getElementById("j" + " " + columnClicked).className = "white"; // on enlève le dernier jeton joué sur la ligne
        //columnClicked = 3; // on replace le jeton pour le prochain joueur au milieu
        document.getElementById("j" + " " + columnClicked).className = "red";
        player = false;
      } else {
        document.getElementById(diffColonne + " " + columnClicked).firstChild.className = "red"
        couleurJoueur = "yellow";
        //document.getElementById("j" + " " + columnClicked).className = "white";
        //columnClicked = 3;
        document.getElementById("j" + " " + columnClicked).className = "yellow";
        player = true;
      }
      coupJoue = true;
    } else {
      diffColonne -= 1;
    }
  }

  if(coupJoue)
  {
    while (isPathing) {
      if (nextHorizontal < 7 && document.getElementById(diffColonne + " " + nextHorizontal).className != "white") {
        if (!player && document.getElementById(diffColonne + " " + nextHorizontal).firstChild.className == "yellow" || player && document.getElementById(diffColonne + " " + nextHorizontal).firstChild.className == "red") {
          Count += 1;
          nextHorizontal += 1
        } else {
          isPathing = false;
        }
      } else {
        isPathing = false;
      }
    }

    isPathing = true;

    // vers la Gauche
    while (isPathing) {
      if (previousHorizontal > -1 && document.getElementById(diffColonne + " " + previousHorizontal) != "white") {
        if (!player && document.getElementById(diffColonne + " " + previousHorizontal).firstChild.className == "yellow" || player && document.getElementById(diffColonne + " " + previousHorizontal).firstChild.className == "red") {
          Count += 1;
          previousHorizontal -= 1;
        } else {
          isPathing = false;
        }
      } else {
        isPathing = false;
      }
    }

    // Refresh
    isPathing = true;
    checkVictory(Count);
    Count = 1;
    nextVertical = diffColonne + 1;
    previousVertical = diffColonne - 1;
    previousHorizontal = columnClicked - 1;
    nextHorizontal = columnClicked + 1;
    // Refresh

    // Compte verticalement a partir du dernier joué vers le bas
    while (isPathing) {
      if (nextVertical < 6 && document.getElementById(nextVertical + " " + columnClicked).className != "white") {
        if (!player && document.getElementById(nextVertical + " " + columnClicked).firstChild.className == "yellow" || player && document.getElementById(nextVertical + " " + columnClicked).firstChild.className == "red") {
          Count += 1;
          nextVertical += 1;
        } else {
          isPathing = false;
        }
      } else {
        isPathing = false;
      }
    }

    // Refresh
    isPathing = true;
    checkVictory(Count);
    Count = 1;
    nextVertical = diffColonne + 1;
    previousVertical = diffColonne - 1;
    previousHorizontal = columnClicked - 1;
    nextHorizontal = columnClicked + 1;
    // Refresh

    // Diagonale vers corner bas droit
    while (isPathing) {
      if (nextVertical < 6 && nextHorizontal < 7 && document.getElementById(nextVertical + " " + nextHorizontal).className != "white") {
        if (!player && document.getElementById(nextVertical + " " + nextHorizontal).firstChild.className == "yellow" || player && document.getElementById(nextVertical + " " + nextHorizontal).firstChild.className == "red") {
          nextVertical += 1;
          nextHorizontal += 1;
          Count += 1;
        } else {
          isPathing = false;
        }

      } else {
        isPathing = false;
      }
    }

    isPathing = true;

    // Diagonale vers corner Haut Gauche
    while (isPathing) {
      if (previousVertical > 0 && previousHorizontal > 0 && document.getElementById(previousVertical + " " + previousHorizontal).className != "white") {
        if (!player && document.getElementById(previousVertical + " " + previousHorizontal).firstChild.className == "yellow" || player && document.getElementById(previousVertical + " " + previousHorizontal).firstChild.className == "red") {
          Count += 1;
          previousVertical -= 1;
          previousHorizontal -= 1;
        } else {
          isPathing = false;
        }
      } else {
        isPathing = false;
      }


    }

    // Refresh
    isPathing = true;
    checkVictory(Count);
    Count = 1;
    nextVertical = diffColonne + 1;
    previousVertical = diffColonne - 1;
    previousHorizontal = columnClicked - 1;
    nextHorizontal = columnClicked + 1;
    // Refresh

    // Diagonale vers corner haut droit
    while (isPathing) {
      if (previousVertical > 0 && nextHorizontal < 7 && document.getElementById(previousVertical + " " + nextHorizontal).className != "white") {
        if (!player && document.getElementById(previousVertical + " " + nextHorizontal).firstChild.className == "yellow" || player && document.getElementById(previousVertical + " " + nextHorizontal).firstChild.className == "red") {
          previousVertical -= 1;
          nextHorizontal += 1;
          Count += 1;
        } else {
          isPathing = false;
        }

      } else {
        isPathing = false;
      }
    }

    // Refresh
    isPathing = true;
    checkVictory(Count);
    nextVertical = diffColonne + 1;
    previousVertical = diffColonne - 1;
    previousHorizontal = columnClicked - 1;
    nextHorizontal = columnClicked + 1;
    // Refresh

    // Diagonale vers corner haut gauche
    while (isPathing) {
      if (nextVertical < 6 && previousHorizontal > 0 && document.getElementById(nextVertical + " " + previousHorizontal).className != "white") {
        if (!player && document.getElementById(nextVertical + " " + previousHorizontal).firstChild.className == "yellow" || player && document.getElementById(nextVertical + " " + previousHorizontal).firstChild.className == "red") {
          Count += 1;
          nextVertical += 1;
          previousHorizontal -= 1;
        } else {
          isPathing = false;
        }

      } else {
        isPathing = false;
      }
    }

    checkVictory(Count);
    Count = 1;
  }
}
}
// Vérifie la victoire du joueur et envoie un message de fin
function checkVictory(jetonAlignes) {
  var joueurGagnant;
  if (!player)
    joueurGagnant = "Jaune";
  else
    joueurGagnant = "Rouge";
  if (jetonAlignes >= 4)
    alert("Le joueur " + joueurGagnant + " a gagné avec " + jetonAlignes);
}


function checkKey(e) {

  e = e || window.event;
  if (e.keyCode == '37') {
    alert("gauche");
  }
  if (e.keyCode == '39') {
    alert("droite");
  }

  if (e.keyCode == '13') {
    alert("enter");
  }
}

function gridInit() {
  var ligneJeu = document.createElement('table');
  ligneJeu.id = 'ligneJeu';
  document.getElementById('full').appendChild(ligneJeu);

  // cree la table du puissance 4
  var table = document.createElement('table');
  table.id = 'puissance4';
  table.className = 'blue';
  document.getElementById('full').appendChild(table);

  for (var i = 0; i < 6; i++) {


    tr = document.createElement('tr');

    tr.id = 'tr' + i; //cree les <tr>

    document.getElementById('puissance4').appendChild(tr);

    for (var j = 0; j < 7; j++) {

      // Crée les cellules td
      td = document.createElement('td'); // cree les <td>
      td.id = i + " " + j;
      td.className = 'widthh';
      document.getElementById('tr' + i).appendChild(td);

      // Crée sous forme de div les jeton blanc à l'intérieur des td
      jeton = document.createElement('div');
      jeton.className = "white";
      document.getElementById(i + " " + j).appendChild(jeton);
    }
  }
}

function createGameLine() {
  tr = document.createElement('tr');
  tr.onclick = play;
  tr.id = 'tra';
  document.getElementById('ligneJeu').appendChild(tr);
  for (var j = 0; j < 7; j++) {

    // Crée les cellules td
    td = document.createElement('td'); // cree les <td>
    td.id = "a" + " " + j;
    td.className = "widthh";
    document.getElementById('tra').appendChild(td);

    jeton = document.createElement('div');
    jeton.className = "white";
    jeton.id = "j" + " " + j;
    document.getElementById("a" + " " + j).appendChild(jeton);
  }
}

/*function checkVictory(i,j)
{
var HozizontalCount=1;
if(player && document.getElementById(diffColonne + " " +columnClicked).firstChild.className + 1) == "yellow")
alert(horizontalCount+=1);

else if(!player && document.getElementById(diffColonne + " " +columnClicked).firstChild.className) == "red")
}*/


/*for(var i =0; i<6; i++)
{
diffColonne = 6-i;
if(!document.getElementById(diffColonne + " " +columnClicked).hasChildNodes())
{

}
else
break;
}*/