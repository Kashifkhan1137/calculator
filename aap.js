/*

const title=document.getElementById("main-heading");

console.log(title);

const lisitem=document.getElementsByClassName("list-items");
console.log(lisitem);


// const container=document.getElementsByTagName("container");
// console.log(container);

const x=document.querySelector("l1");
console.log(x);



*/

// const { document } = require("postcss");

// const title=document.querySelector("main-heading");
// title.style.color=red;
// console.log(title);

//  const title=document.querySelector('main-heading');
// title.style.color='red';
// console.log(title);

// document.querySelectorAll('main-heading');
// title.style.color='red';

// const lisitem=document.querySelectorAll('list-items');

// for(i=0;i<lisitem.length;i++){
//     lisitem[i].computedStyleMap.fontSize='10rem'
// }
// console.log(lisitem);

// const ul=document.querySelector('ul');
// const li=document.createElement('li');

// let ul=document.querySelector('ul');
// console.log(ul.parentNode.parentNode);

// console.log(ul.parentElement.parentElement);

// const html =document.documentElement;
// console.log(html.parentElement);
// console.log(html.parentNode);

// let ul_li=document.querySelector('ul');
// console.log(ul_li.childNodes);
// console.log(ul_li.firstChild);
// console.log(ul_li.lastChild);

// let sb=document.querySelector('ul');
// const div=document.querySelector('div');
// console.log(div.childNodes);

// console.log(sb.previousElementSibling);
// console.log(sb.nextSibling);

// from video
// target methods of DOM:
/*

console.log(document);//this will retrun the overall documnent
console.log(document.all);//this will retrun the all tage of the document
console.log(document.all[12]);//this will retrun the specific tage of the document

console.log(document.head);//this will return the head of the HTML
console.log(document.title);//this will return the title of the HTML
console.log(document.body);//this will return the body of the HTML

console.log(document.links);//this will return the number of a tages in the HTML file
console.log(document.images);//this will return the number of images in the HTML file
console.log(document.forms);//this will return the number of forms in the HTML file
console.log(document.doctype);//this will return Doctyoe of the HTML file
console.log(document.URL);//this will return the url of our website
console.log(document.domain);//this will return the IP address of our website
*/

var value;

// to get value by id
value = document.getElementById("main-heading");
console.log(value);

// to get value by class name and also the number of that class usage in this file
value = document.getElementsByClassName("container");
// value = document.getElementsByClassName("container")[0];//to print by class index also
console.log(value);

// to get value by tag name and also the number of that class usage in this file
value=document.getElementsByTagName('ul');
value=document.getElementsByTagName('li');
value=document.getElementsByTagName('li')[2];//by particular index
console.log(value);

