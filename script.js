// How to compare two JSON have the same properties without order?

var obj1 = {"name":"Nandhini Perumal","age":29};
var obj2 = {"age":29,"name":"Nandhini Perumal"};
var flag=true;
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal"+flag);

// Use the same rest countries and print all countries name, region, sub region and population
const getCountries =() => {
    const xhr =new XMLHttpRequest();
    xhr.open("GET","https://restcountries.com/v3.1/all ");
    //  xhr.responseType = "json";
     xhr.onload = () => {
        const data = xhr.response;
        console.log(data);
      console.log(JSON.parse(data));
       const result = JSON.parse(data)
        .map((country)=>({
            name:country.name,
            population:country.population,
            region:country.region,
            subregion:country.subregion
        }));
        console.log(result)
    };
  xhr.send();
};
getCountries();
