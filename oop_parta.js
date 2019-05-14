/*

Your function should return the average cost of all shoes per designer in this format:

var expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};

*/

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

// console.log(currentInventory[0].shoes.length)
// console.log(currentInventory[0].shoes[0]['price'])

function getDesignerName(inventory) {
    var designerName = []
    for (var i = 0; i < inventory.length; i++) {
        designerName.push(inventory[i].name)
    }
    return designerName
}

var designers = getDesignerName(currentInventory)

function designerDict(designerNames, inventory) {
  var designerArray = []
  for (var i = 0; i < designerNames.length; i++) {
    var designerDict = {}
    designerDict['name'] = designerNames[i]
    for (var j = 0; j < inventory.length; j++) {
      if (designerDict['name'] === inventory[j].name) {
        var totalCost = 0
        for (var k = 0; k < inventory[j].shoes.length; k++) {
          totalCost += inventory[j].shoes[k]['price']
          }
        var averagePrice = totalCost / inventory[j].shoes.length;
        designerDict['averagePrice'] = averagePrice
      }
    }
    designerArray.push(designerDict)
  }
  return designerArray
}

// console.log(designerDict(designers, currentInventory))

function calculateAveragePricePerDesigner(inventory) {
  var expected = {}
  var designers = getDesignerName(inventory)
  var newDict = designerDict(designers, inventory)
  expected['designers'] = newDict
  return expected
}

console.log(calculateAveragePricePerDesigner(currentInventory))
