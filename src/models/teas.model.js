const teasQuery = require('../queries/teas.query')

const fetchTeas = () => {
  let teas = teasQuery.fetchTeas()

  return teas.then(result => {
    return result.length < 1
      ? { error: 'error retrieving teas', status: 404 }
      : result
  })
}
// const findTea = (id) => {
//   let tea = teasQuery.findTea(id)

//   return tea.then(result => {
//     return result.length < 1
//       ? { error: 'ERROR: tea not found', status: 404 }
//       : result
//   })
// }
// const createTea = (teaInfo) => {
//   let tea = teasQuery.createTea(teaInfo)

//   return tea.then(result => {
//     return !result
//       ? { error: 'ERROR: Unable to create new tea', status: 403 }
//       : result
//   })
// }
// const editTea = (teaInfo) => {
//   let tea = teasQuery.editTea(teaInfo)

//   return tea.then(result => {
//     return !result
//       ? { error: 'ERROR: Unable to update tea', status: 404 }
//       : result
//   })
// }
// const deleteTea = (id) => {
//   let tea = teasQuery.deleteTea(id)

//   return tea.then(result => {
//     return result.length < 1
//       ? { error: 'ERROR: Unable to delete teas', status: 404 }
//       : result
//   })
// }
module.exports = {
  fetchTeas,
  // findTea,
  // createTea,
  // editTea,
  // deleteTea
}