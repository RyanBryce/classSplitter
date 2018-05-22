function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  
  return array;
}
function groupSplit(shuffledClass, groupSize) {
  const groups = [];
  for (let i = 0; i < shuffledClass.length; i = i + groupSize) {
    groups.push(shuffledClass.slice(i, i + groupSize))
  }
  return groups;
}
var arr = ["Alberto Oshiro", "Anthony Ngu", "Ashley Jimenez", "Atim Effiong", "Blake Keller", "Blake Moore", "Brannon Laveder", "Connie Elbon", "Craig Wright", "Francisco Arechiga", "Garret Wasden", "Jared Bryce", "Jason Heap", "Jones Puig", "Jordan Terry", "Justin Libbee", "Kelsey Grover", "Kevin Law", "Liz Parker", "Mark Polichette", "Michael Daniels", "Nikole Bellock", "Parker Grant", "Riley Riley Barlow", "Ronnie Barrio", "Shawn Mangum", "Trevis Thomas", "William Swensen", "Zac Colton"];
const shuffledClass = shuffle(arr);
console.log(arr);
const groups = groupSplit(shuffledClass, 4);
console.log(groups);

