
function reverseText(text){
  let splitText = text.split("")
  let reverseArray = splitText.reverse()

  return new Promise(function(resolve, reject) {
      var newText = reverseArray.join("")

      if(reverseArray){
          resolve(newText)
      } else {
          reject("Could not reverse text.")
      }
  })
}


function capitalizeText(text){

return new Promise (function(resolve, reject) {
    if(capitalizeText) {
        resolve(text.toUpperCase())
    } else {
        reject ("Could not Uppercase Text.")
    }
})
}

reverseText("apples").then(function(result) {
    return capitalizeText(result)
}).then(function(final){
    console.log(final)
}).catch(function(err){
    console.log("Error: " + err)
})
