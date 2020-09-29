
exports.min = function min (array) {
  if ( !array || array.length === 0){
    return 0;
  }
  let min = Math.min(...array);
    return min;
};

exports.max = function max (array) {
  if ( !array || array.length === 0){
    return 0;
  }
  let min = Math.max(...array);
    return min;
};

exports.avg = function avg (array) {
  if ( !array || array.length === 0){
    return 0;
  }
  let sum = 0;
  for ( let i = 0; i < array.length; i++){
    sum += array[i];
  }
  let avg = sum / array.length;
  return avg;
};
