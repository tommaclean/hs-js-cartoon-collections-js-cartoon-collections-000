function dwarfRollCall(dwarves) {
  var newArr = [];
  for(let i = 0; i < dwarves.length; i++){
  newArr.push(`${i + 1}. ${dwarves[i]} `);
  }
    return newArr.join(``);
}
  

function summonCaptainPlanet(planeteerCalls){
  var array = [];
  for(let i = 0; i < planeteerCalls.length; i++){
    array.push(planeteerCalls[i].toUpperCase() + `!`);
  }
  return array;
}

function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++){
    if (words[i].length > 4){
      return true;
    }
  }
  return false ;
}

function findTheCheese(foods) {
  var cheeses = ["cheddar", "gouda", "camembert"];
  for(let i = 0; i < foods.length; i++){
    if (cheeses.includes(foods[i])){
      return foods[i];
    }
  }
  return "no cheese!" ;
}
