// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  ///////// investigation case /////////

  if (obj === undefined || typeof(obj) === "function") {
  	return;
  }

  ///////////// base cases /////////////

  //primitive base null
  if (obj === null) {
  	return "" + null;
  }
  //primitive base boolean
  if (typeof(obj) === "boolean") {
  	return obj + "";
  }
  //primitive base number
  if (typeof(obj) === "number") {
  	return obj + "";
  }
  //primitive base string
  if (typeof(obj) === "string") {
  	return '\"' + obj + '\"';
  }

  ////////// recursive cases ///////////

  var result = "";
  var isArray = false;

  //recursive loop for array
  if (Array.isArray(obj)) {
    isArray = true;
    if (obj.length === 0) {
      result = ""; 
    } else {
      result = stringifyJSON(obj[0]);
      for (var i = 1; i < obj.length; i++) {
       result += ',' + stringifyJSON(obj[i]);
      }
    }
  //recursive loop for object (non-array)
  } else { 
    if (Object.keys(obj).length === 0) {
      result = "";
    } else {
      for (var key in obj) {
        if (obj[key] === undefined || typeof(obj[key]) === "function") {
          result += "";
        } else {
        result += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
        }
      }
    }
    result = result.substring(0, result.length - 1);
  }
  
  //wrapper
  if (isArray) {
    result = "[" + result + "]";
  } else {
    result = "{" + result + "}";
  }
  return result;
  
};
