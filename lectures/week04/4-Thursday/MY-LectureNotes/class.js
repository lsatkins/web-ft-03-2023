let arr = [1, 2, 3, 4, 5];

arr.forEach(function(val){
    console.log(val);
});
arr.forEach(function(val){
    val *= 2;
    console.log(val);
})

arr.forEach(function(val){
    console.log(val);
})

arr.forEach( (val) =>{
    console.log(val);
})
arr.forEach((val)=>{
    console.log(val);
})