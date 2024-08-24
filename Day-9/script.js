// // Section HtMLCOLLECTION which looks like an array but it is not an array we cannot use array methods on it.



// const para = document.getElementsByTagName('p');
// console.log(para);

// //Converting html collection into array
// const paraArray = [...para];
// console.log(paraArray);



// paraArray.forEach((el)=>{
//     console.log(el.innerHTML);
// })


// // getElementsByClassName
// // getElementsByClassName also return a html collection;
// const li =document.getElementsByClassName('special');
// console.log(li);


// // getElementsById
// const heading = document.getElementById('heading');
// console.log(heading);


// // queryselector
// const photo = document.querySelector('.special');
// console.log(photo);

// querySelectorAll
// const lil = document.querySelectorAll('.special');
//     console.log(lil);

// lil.forEach((el)=>{
//     console.log(el.textContent);
// });


// For selecting Elements
// getElementsByClassName, getElementsByTagName ,getElementById,querySelector,querySelectorAll all are available on the document object 



// To read or manipulate text content from the elements
// textContent , innerText , innerHTML

// console.log(document.body.innerText);



// const para = document.getElementById('para');
// console.log(para);

// para.innerText ='Hello';
// para.innerHTML = '<h1> Hello MOTO </h1>'



// textContent = directly reads the text without performing calculatiom on the css the text is printed as it is as our file
// innerText = preserves the css properties
// // innerHTML = when you have to create html in the element you have selected.

// // Value , href , src

// const input = document.getElementById('bear');
// console.dir(input.value);



// // href
// const a = document.getElementById('address');
// console.log(a.href);
// a.href = 'https://www.amazon.com'


// // src 
// const pic = document.getElementById('bear-photo');
// console.log(pic.src);
// pic.src='./task2.jpg';


// // Changing styles on the element
// console.log(heading.style)

// // Changing Styles On the Element
// heading.style.color = 'red';
// heading.style.backgroundColor = 'red';

// // SetAttribute and get attribute
// a.setAttribute('class','addressss');

// console.log(a.getAttribute('class'));

// input.setAttribute('placeholder','enter bear Name');


console.log(3 && 1);
console.log(1 || 0);
console.log(null ?? 10);





// Asynchronus 
alert('Hello');
console.log('async');



setTimeout(()=>{
    console.log('async')
},200)