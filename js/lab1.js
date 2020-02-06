
var array = [];
array.length = 10
for (var i = 0; i < array.length; i++) {
    array[i] = (Math.random() * 12);
    
}
for (var j =  0; j <array.length;j++){
    console.log( array[j] );
}