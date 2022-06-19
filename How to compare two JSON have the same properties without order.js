var obj1 = {name: "Person 1", age:5};
var obj2 = {age:5, name: "Person 1"};

var obj=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            obj=false;
            break;
        }
    }
}
else {
    obj=false;
}
console.log(obj+" "+"obj1 and obj2 have same properties");