function findMatching(source, sought) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase() === sought.toLowerCase()
    )
  }


function fuzzyMatch(source, testString){
    return source.filter(possibleMatch => possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0 )

}

function matchName(source, nameSearch){
    return source.filter(name => name.name === nameSearch)

}