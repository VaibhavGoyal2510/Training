// object assign

const obj1={a:1,b:2};
const obj2={c:3,d:4};

// NOTE:Target and source

// Object.assign(target,source)
Object.assign(obj2,obj1);
console.log(obj2)

// object freeze

const products={
    name:'TV',
    price:'28000'
}
Object.freeze(products);
products.name='washing machine';
console.log(products);

// note:destructuring
const items=['tv','ac','mobile'];
const [first, ,third]=items;
console.log(first,third);