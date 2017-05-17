const app = "I don't do much."

function bumpCounter(){
  let counter = 0;
  function addBump(){
    counter ++
  }
  function getBumps(){
    return counter

  }
  return{addBump, getBumps}

}


function createAnimal(animalType){
  return function(deadlyDevice){
    return {animalType, deadlyDevice}
  }
}

let sharkCreator = createAnimal('Shark')
let sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
let sharkWithFrickinCannon = sharkCreator('Cannon')
