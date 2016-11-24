// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var nodeList = [];
  
  //initial source: JavaScript Cookbook > Traversing DOM 
  var traverseDOM = function(node) {
    if (node.classList !== undefined
      && node.classList.contains(className)) {
      nodeList.push(node);
    }
    node = node.childNodes[0]; //traverse to first child
    while (node) {
      traverseDOM(node);
      node = node.nextSibling; //then move through sibling nodes until null
    }
  };

  traverseDOM(document.body);

  return nodeList;
};
