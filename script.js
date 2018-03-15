
var tr; // stocker les tr en get byid
var td;
var jeton;
var diffColonne; // pour calculer la gravité
var player = false; // true = yellow ; false = red;



var table = document.createElement('table');

table.id = 'puissance4'; // cree la <table>

table.className = 'blue';
document.getElementById('full').appendChild(table);


for(var i=0; i<6; i++)
{
	tr = document.createElement('tr');
  tr.id = 'tr' + i; //cree les <tr>
  tr.onclick = play;
  
  document.getElementById('puissance4').appendChild(tr);
  
	for(var j=0; j<7; j++)
	{
	td = document.createElement('td'); // cree les <td>
  
  td.id = i + " " + j;
  td.className = 'widthh';
  document.getElementById('tr'+i).appendChild(td);
  
  
  }
}

function play()
{
	var coupJoue = false;

	var previousHorizontal = parseInt(event.target.id[2]) -1;
  var nextHorizontal = parseInt(event.target.id[2]) +1;
  
  var leftHorizontal = true;
	var rightHorizontal = true;
  var up = true;
	var down = true;
  
  var Count=1;
  
  var verticalCount=1;
	

for(var i =0; i<6; i++)
{
	if(!coupJoue)
	{
    diffColonne = 5-i; 
    if(!document.getElementById(diffColonne + " " +event.target.id[2]).hasChildNodes())
    {
  	jeton = document.createElement('div');
  		if(player) // Pour alterner les joueurs jaunes et rouges
  		{
  		jeton.className = "yellow";
  		player = false;
  }
  else
  {
  jeton.className = "red";
  player = true;
  }
  
  document.getElementById(diffColonne + " " +event.target.id[2]).appendChild(jeton);
  
  coupJoue = true;
  
  
  var nextVertical = diffColonne +1;
  var previousVertical = diffColonne -1;
  
  var diagonale1 = true; // vers corner bas droit
  var diagonale2 = true; // vers corner haut gauche
  var diagonale3 = true; // vers corner haut droite
  var diagonale4 = true; // vers corner bas gauche
  
  
  
  while(rightHorizontal)
{
if(nextHorizontal <7 && document.getElementById(diffColonne + " " + nextHorizontal).hasChildNodes())
  {
if(!player && document.getElementById(diffColonne + " " + nextHorizontal).firstChild.className == "yellow" || player && document.getElementById(diffColonne + " " + nextHorizontal).firstChild.className == "red")
{
Count+=1;
nextHorizontal +=1
}
else
{
rightHorizontal = false;
checkVictory(Count);
}
}
else
{
rightHorizontal = false;
checkVictory(Count);
}
}

    
while(leftHorizontal)
  {
  if(previousHorizontal>-1 && document.getElementById(diffColonne + " " + previousHorizontal).hasChildNodes())
    {
if(!player && document.getElementById(diffColonne + " " + previousHorizontal).firstChild.className == "yellow" || player && document.getElementById(diffColonne + " " + previousHorizontal).firstChild.className == "red")
{
Count+=1;
previousHorizontal -=1;
}
else
{
leftHorizontal = false;
checkVictory(Count);
Count =1;
}
}
else
{
leftHorizontal = false;
checkVictory(Count);
Count =1;
}
}

// Refresh
nextVertical = diffColonne +1;
previousVertical = diffColonne -1;
previousHorizontal = parseInt(event.target.id[2]) -1;
nextHorizontal = parseInt(event.target.id[2]) +1;
// Refresh

while(up)
  {
  if(nextVertical<6  && document.getElementById(nextVertical + " " + event.target.id[2]).hasChildNodes())
    {
if(!player && document.getElementById(nextVertical + " " + event.target.id[2]).firstChild.className == "yellow" || player && document.getElementById(nextVertical + " " + event.target.id[2]).firstChild.className == "red")
{
Count+=1;
nextVertical +=1;
}
else
{
up = false;
checkVictory(Count);
Count =1;
}
}
else
{
up = false;
checkVictory(Count);
Count =1;
}
}

// Refresh
nextVertical = diffColonne +1;
previousVertical = diffColonne -1;
previousHorizontal = parseInt(event.target.id[2]) -1;
nextHorizontal = parseInt(event.target.id[2]) +1;
// Refresh

while(diagonale1)
  {
  if(nextVertical<6 && nextHorizontal <7 && document.getElementById(nextVertical + " " + nextHorizontal).hasChildNodes())
    {
if(!player && document.getElementById(nextVertical + " " + nextHorizontal).firstChild.className == "yellow" || player && document.getElementById(nextVertical + " " + nextHorizontal).firstChild.className == "red")
{
nextVertical +=1;
nextHorizontal +=1;
Count+=1;
}
else
{
diagonale1 = false;
checkVictory(Count);
}

}

else
{
diagonale1 = false;
checkVictory(Count);
}
}

while(diagonale2)
  {
  if(previousVertical>0 && previousHorizontal > 0 && document.getElementById(previousVertical + " " + previousHorizontal).hasChildNodes())
    {
if(!player && document.getElementById(previousVertical + " " + previousHorizontal).firstChild.className == "yellow" || player && document.getElementById(previousVertical + " " + previousHorizontal).firstChild.className == "red")
{
Count+=1;
previousVertical -=1;
previousHorizontal -=1;
}
else
{
diagonale2 = false;
checkVictory(Count);
Count = 1;
}
}
else
{
diagonale2 = false;
checkVictory(Count);
Count = 1;
}
}

// Refresh
nextVertical = diffColonne +1;
previousVertical = diffColonne -1;
previousHorizontal = parseInt(event.target.id[2]) -1;
nextHorizontal = parseInt(event.target.id[2]) +1;
// Refresh

while(diagonale3)
  {
  if(previousVertical>0 && nextHorizontal <7 && document.getElementById(previousVertical + " " + nextHorizontal).hasChildNodes())
    {
if(!player && document.getElementById(previousVertical + " " + nextHorizontal).firstChild.className == "yellow" || player && document.getElementById(previousVertical + " " + nextHorizontal).firstChild.className == "red")
{
previousVertical -=1;
nextHorizontal +=1;
Count+=1;
}
else
{
diagonale3 = false;
checkVictory(Count);
}

}

else
{
diagonale3 = false;
checkVictory(Count);
}
}

// Refresh
nextVertical = diffColonne +1;
previousVertical = diffColonne -1;
previousHorizontal = parseInt(event.target.id[2]) -1;
nextHorizontal = parseInt(event.target.id[2]) +1;
// Refresh

while(diagonale4)
  {
  if(nextVertical<6 && previousHorizontal > 0 && document.getElementById(nextVertical + " " + previousHorizontal).hasChildNodes())
    {
if(!player && document.getElementById(nextVertical + " " + previousHorizontal).firstChild.className == "yellow" || player && document.getElementById(nextVertical + " " + previousHorizontal).firstChild.className == "red")
{
Count+=1;
nextVertical +=1;
previousHorizontal -=1;
}
else
{
diagonale4 = false;
checkVictory(Count);
Count = 1;
}

}

else
{
diagonale4 = false;
checkVictory(Count);
Count = 1;
}
}




    }
    
  }
}



}

// Vérifie la victoire du joueur et envoie un message de fin
function checkVictory(jetonAlignes)
{
var joueurGagnant;
if(!player)
joueurGagnant ="Jaune";
else
joueurGagnant ="Rouge";
if(jetonAlignes>=4)
alert("Le joueur " + joueurGagnant + " a gagné avec " + jetonAlignes);
}

/*function checkVictory(i,j)
{
var HozizontalCount=1;
if(player && document.getElementById(diffColonne + " " +event.target.id[2]).firstChild.className + 1) == "yellow")
alert(horizontalCount+=1);

else if(!player && document.getElementById(diffColonne + " " +event.target.id[2]).firstChild.className) == "red")
}*/


/*for(var i =0; i<6; i++)
{
	diffColonne = 6-i;
	if(!document.getElementById(diffColonne + " " +event.target.id[2]).hasChildNodes())
  {
  
  }
  else
  break;
}*/