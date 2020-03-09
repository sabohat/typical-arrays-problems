
exports.min = function min (array) {
if(array != undefined && array.length != 0){
  return Math.min(...array); 
} else {
  return 0;
}}

exports.max = function max (array) {
  if(array != undefined && array.length != 0) {return Math.max(...array);}
  else {
    return 0;
  }
}

exports.avg = function avg (array) {
  let sum = 0;
  let countM =0;
  if(array != undefined && array.length != 0) {
for(i=0; i<array.length; i++ ){
sum += array[i];
countM++;
}
return sum/countM;

}else {
  return 0;
}
}
