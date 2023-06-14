const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai-dish.jpg',
    founded: 1994
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/cafe.jpg',
    founded: 1973    
}])
.then(() => {
    console.log('Success')
    process.exit()
})
.catch(err => {
    console.log('Failure', err)
    process.exit()
})