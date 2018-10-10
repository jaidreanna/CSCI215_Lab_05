console.clear();


//-------
// Task 1
//-------

var divNode = document.getElementById('fiddle');




//-------
// Task 2
//-------


var pNode = document.createElement("p");
var pTextnode = document.createTextNode("CSCI 215: Lab 5 Todo");

pTextnode.appendChild(pNode);
pNode.appendChild(pTextnode);


//-----
// Task 3
//------


var hrNode = document.createElement("hr");


divNode.document.body.appendChild(hrNode);





//------
//Task 4
//------

var olNode = document.createElement("OL");

var liNode1 = document.createElement("LI");

var liNode2 = document.createElement("LI2");

var liTextNode1 = document.createTextNode("Read Assignment");

var liTextNode2 = document.createTextNode("Code Assignment");


liNode1.appendChild(liTextNode1);

liNode2.appendChild(liTextNode2);

olNode.appendChild(liNode1);

olNodeappendChild(liNode2);

divNode.appendChild(olNode);




//-------
// Task 5
//-------

var imgNode = document.createElement("img");

var srcAttr = document.getElementbyId("img");

var srcAttr = document.createElement("src");


scAttr.value = "http://munsellb.people.cofc.edu/img/prettypicture.jpg";

imgNode.setAttributeNode(srcAttr);

divNode.appendchild(imgNode);





