var recipes = new Object();


function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object, {[key]: value})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  Object.assign(object, {[key]: value})
  return object
}

function deleteFromObjectByKey(object, key){
  delete object['key']
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object['key']
  return object
}
