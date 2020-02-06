function sayHi1(name,lastname,age,country = 'Ukraine') {
    var proces =  name + `${lastname}`;
    console.log(proces);
    if (age < 18) {
        alert("пока");
    }
    var prom = prompt("звідки ви ");
    if (prom == 'Ukraine'){
        alert("красавчик");

    }
    else{
        alert('ну такое');
    }
    var arg = Array.from(arguments);
    alert( arguments.length ? true : false );
    return arg;
    
}

sayHi1('ser','tru',15);
let sayHi2 = function(name,lastname,age,country = 'Ukraine') {
    
    var proces =  name + `${lastname}`;
    console.log(proces);
    if (age < 18) {
        alert("пока");
    }
    var prom = prompt("звідки ви ");
    if (prom == 'Ukraine'){
        alert("красавчик");

    }
    else{
        alert('ну такое');
    }
    var arg = Array.from(arguments);
    alert( arguments.length ? true : false );
    return arg;
    
};
sayHi2('ser','tru',18);