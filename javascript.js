//sets 

const letters = new Set(["a","b","c","d","e","f"]);

let text = "";
letters.forEach(function(value){
        text += value + "<br>";
})

document.getElementById("demo").innerHTML = text ;

