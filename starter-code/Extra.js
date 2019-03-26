// ------------ Part 1 ------------

var aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}


// 1.  access the value of the capacityInGallons key 
console.log(aquarium.capacityInGallons);
// 2.  add 2 rocks to the numberOfRocks in the aquarium
aquarium.numberOfRocks= aquarium.numberOfRocks +2;
console.log(aquarium.numberOfRocks);
// 3.  access the clown fish and print the object.
console.log(aquarium.fish[2])
// 4.  access the size of the puffer fish.
console.log(aquarium.fish[1].size)
// 5.  your goldfish grew!  Access the 'size' key of goldfish and reassign it to '4 inches'.
aquarium.fish[1].size = '4 inches'
console.log(aquarium.fish[1].size)
// 6.  you bought a new fish!  Make a new object for a 5 inch long, blue starfish and add it to the fish array.
aquarium.fish.push({type:'Starfish', size:'5 inches', color :'Blue'})
console.log(aquarium.fish[3])



// ------------ Part 2 ------------

var hammondsMines = {
  buenosAires: { depth: "400 meters", annualBudget: 1000000, specimens: [ "Dilophosaurus","Brachiosaurus" ] },
  mexico: { depth: "350 meters", annualBudget: 900000, specimens: [   "Gallimimus", "Parasaurolophus"]}
}


// 1. Access the depth of John Hammond's mine in Mexico.
console.log(hammondsMines.buenosAires.depth)
// 2. Store the depth of the Mexican mine into an appropriately named variable.
var mexicodepth = hammondsMines.mexico.depth;
console.log(mexicodepth)
// 3. Access the annual budget for Hammond's mine in Buenos Airies.
console.log(hammondsMines.buenosAires.annualBudget)
// 4. Store the annual budget for Hammond's mine in Buenos Aires into an appropriately named variable..
var HBAnnualBudget = hammondsMines.buenosAires.annualBudget;
// 5. Access the dinosaur DNA specimens found in Buenos Aires.
console.log(hammondsMines.buenosAires.specimens)
// 6. Insert Nicaragua into hammondsMines
var nicaragua = {}
 
  hammondsMines.nicaragua= {
    depth: "200 meters",
    annualBudget: 1500000,
    specimens: [
      "Tyrannosaurus Rex",
      "Stegosaurous",
      "Triceratops",
      "Velociraptor"
    ]
  }

  console.log(hammondsMines)
// 7. Create three variables to store the annual budgets for each mine into them.
var HMAnnualBudget = hammondsMines.mexico.annualBudget;
var HNAnnualBudget = hammondsMines.nicaragua.annualBudget;

console.log('buenosAires Budget '+ HBAnnualBudget+ ' mexico Budget '+ HMAnnualBudget+' nicaragua Budget '+ HNAnnualBudget)
// 8. Create a new reasonably named variable to track the total annual cost of operation for the mines by adding the previously stored budgets.
var totalBudget= HBAnnualBudget+HMAnnualBudget+HNAnnualBudget
console.log('Total Budget is '+ totalBudget)
// 9. Access the "Parasaurolophus" specimen.
console.log(hammondsMines.mexico.specimens[1])




// ------------ Part 3 ------------

var transformers = [
    {
      name: 'Optimus Prime',
      form: 'Freightliner Truck',
      form_type: 'vehicle',
      team: 'Autobot'
    },
    {
      name: 'Megatron',
      form: 'Gun',
      form_type: 'object',
      team: 'Decepticon'
    },
    {
      name: 'Bumblebee',
      form: 'VW Beetle',
      form_type: 'vehicle',
      team: 'Autobot'
    },
    {
      name: 'Soundwave',
      form: 'Walkman',
      form_type: 'object',
      team: 'Decepticon'
    },
    {
      name: 'Starscream',
      form: 'Fighter Jet',
      form_type: 'vehicle',
      team: 'Decepticon',
    },
    {
      name: 'Rodimus Prime',
      form: 'Ford GT',
      form_type: 'vehicle',
      team: 'Autobot',
    }
  ];

// 1. Write a function called `transformersNames` that uses `map` to return a new array of transformers' names.
// 2. Write a function called `onlyAutobots` that uses `filter` to return a new array of only Autobots.
// 3. Write a function called `onlyVehicles` that uses `filter` to return a new array of transformers with only vehicle forms