
var tr; // stocker les tr en get byid
var td;
var jeton;
var diffColonne; // pour calculer la gravité
var player = false; // true = yellow ; false = red;



var table = document.createElement('table');

table.id = 'puissance4'; // cree la <table>

table.className = 'blue';
document.getElementById('full').appendChild(table);


for (var i = 0; i < 6; i++) {
  tr = document.createElement('tr');
  tr.id = 'tr' + i; //cree les <tr>
  tr.onclick = play;

  document.getElementById('puissance4').appendChild(tr);

  for (var j = 0; j < 7; j++) {
    td = document.createElement('td'); // cree les <td>

    td.id = i + " " + j;
    td.className = 'widthh';
    document.getElementById('tr' + i).appendChild(td);


  }
}

function play() {
  var coupJoue = false;
  var columnClicked = parseInt(parseInt(event.target.id[2]));

  var previousHorizontal = columnClicked - 1;
  var nextHorizontal = columnClicked + 1;

  var isPathing = true;

  var Count = 1;

  var verticalCount = 1;


  for (var i = 0; i < 6; i++) {
    if (!coupJoue) {
      diffColonne = 5 - i;
      if (!document.getElementById(diffColonne + " " + columnClicked).hasChildNodes()) {
        jeton = document.createElement('div');
        // Pour alterner les joueurs jaunes et rouges
        if (player) {
          jeton.className = "yellow";
          player = false;
        }
        else {
          jeton.className = "red";
          player = true;
        }

        document.getElementById(diffColonne + " " + columnClicked).appendChild(jeton);

        coupJoue = true;


        var nextVertical = diffColonne + 1;
        var previousVertical = diffColonne - 1;

        // vers la Droite
        while (isPathing) {
          if (nextHorizontal < 7 && document.getElementById(diffColonne + " " + nextHorizontal).hasChildNodes()) {
            if (!player && document.getElementById(diffColonne + " " + nextHorizontal).firstChild.className == "yellow" || player && document.getElementById(diffColonne + " " + nextHorizontal).firstChild.className == "red") {
              Count += 1;
              nextHorizontal += 1
            }
            else {
              isPathing = false;
            }
          }
          else {
            isPathing = false;
          }
        }

        isPathing = true;

        // vers la Gauche
        while (isPathing) {
          if (previousHorizontal > -1 && document.getElementById(diffColonne + " " + previousHorizontal).hasChildNodes()) {
            if (!player && document.getElementById(diffColonne + " " + previousHorizontal).firstChild.className == "yellow" || player && document.getElementById(diffColonne + " " + previousHorizontal).firstChild.className == "red") {
              Count += 1;
              previousHorizontal -= 1;
            }
            else {
              isPathing = false;
            }
          }
          else {
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
          if (nextVertical < 6 && document.getElementById(nextVertical + " " + columnClicked).hasChildNodes()) {
            if (!player && document.getElementById(nextVertical + " " + columnClicked).firstChild.className == "yellow" || player && document.getElementById(nextVertical + " " + columnClicked).firstChild.className == "red") {
              Count += 1;
              nextVertical += 1;
            }
            else {
              isPathing = false;
            }
          }
          else {
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
          if (nextVertical < 6 && nextHorizontal < 7 && document.getElementById(nextVertical + " " + nextHorizontal).hasChildNodes()) {
            if (!player && document.getElementById(nextVertical + " " + nextHorizontal).firstChild.className == "yellow" || player && document.getElementById(nextVertical + " " + nextHorizontal).firstChild.className == "red") {
              nextVertical += 1;
              nextHorizontal += 1;
              Count += 1;
            }
            else {
              isPathing = false;
            }

          }

          else {
            isPathing = false;
          }
        }

        isPathing = true;

        // Diagonale vers corner Haut Gauche
        while (isPathing) {
          if (previousVertical > 0 && previousHorizontal > 0 && document.getElementById(previousVertical + " " + previousHorizontal).hasChildNodes()) {
            if (!player && document.getElementById(previousVertical + " " + previousHorizontal).firstChild.className == "yellow" || player && document.getElementById(previousVertical + " " + previousHorizontal).firstChild.className == "red") {
              Count += 1;
              previousVertical -= 1;
              previousHorizontal -= 1;
            }
            else {
              isPathing = false;
            }
          }
          else {
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
          if (previousVertical > 0 && nextHorizontal < 7 && document.getElementById(previousVertical + " " + nextHorizontal).hasChildNodes()) {
            if (!player && document.getElementById(previousVertical + " " + nextHorizontal).firstChild.className == "yellow" || player && document.getElementById(previousVertical + " " + nextHorizontal).firstChild.className == "red") {
              previousVertical -= 1;
              nextHorizontal += 1;
              Count += 1;
            }
            else {
              isPathing = false;
            }

          }

          else {
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
          if (nextVertical < 6 && previousHorizontal > 0 && document.getElementById(nextVertical + " " + previousHorizontal).hasChildNodes()) {
            if (!player && document.getElementById(nextVertical + " " + previousHorizontal).firstChild.className == "yellow" || player && document.getElementById(nextVertical + " " + previousHorizontal).firstChild.className == "red") {
              Count += 1;
              nextVertical += 1;
              previousHorizontal -= 1;
            }
            else {
              isPathing = false;
            }

          }

          else {
            isPathing = false;
          }
        }

        checkVictory(Count);
        Count = 1;


      }

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
