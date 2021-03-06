
var Mutation_possibleTypes = ['Mutation']
module.exports.isMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
module.exports.isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var Raffle_possibleTypes = ['Raffle']
module.exports.isRaffle = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRaffle"')
  return Raffle_possibleTypes.includes(obj.__typename)
}
