//Linear Search
let beasts = ['centaur', 'godzilla', 'mosura', 'minotaur', 'hydra', 'nessie']

beasts.indexOf('godzilla')

beasts.findIndex(function(item ) { 
  return item === 'godzilla'
})

  beasts.find(function(item){
    return item === 'godzilla'
  })

  beasts.includes('godzilla')