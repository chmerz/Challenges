
function reverseText(text){
  let splitText = text.split("")
  let reverseArray = splitText.reverse()

  return new Promise(function(resolve, reject) {
      if(reverseArray){
          resolve(reverseArray.join(""))
      } else {
          reject("Could not reverse text.")
      }
  })
}

reverseText("apples").then(function(result){
    console.log(result)
}).catch(function(err){
    console.log("Error: " + err)
})

////

function capitalizeText(text){
  callback(text.toUpperCase())

return new Promise (function(resolve, reject) {
    if(capitalizeText) {
        resolve(text.toUpperCase())
    } else {
        reject ("Could not Uppercase Text.")
    }
})
}

capitalizeText("banana").then(function(result){
    console.log(result)
}).catch(function(err){
    console.log("Could not Uppercase Text.")
})
