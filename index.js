let pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

let petwithage = pets.map(pet => ({...pet , age : getAge(pet)}))
console.log(petwithage)
console.log(pets)

function getAge(pet) {
  return new Date().getFullYear() - pet.bornOn;




let filterDogs=(arr)=> arr.filter((el)=> el.type ==="dog")
console.log(filterDogs(pets))

let findPet = (arr,name)=> arr.find(el=> el.name === name)

console.log(`Jasper is ${findPet(pets,"Jasper").age} years old`)