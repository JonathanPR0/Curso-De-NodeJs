function zero() {
  console.log('Number Zero');
  one();
}
function one() {
  console.log('Number One');
}
function three() {
  console.log('Number Three');
}
function five() {
  console.log('Number Five');
  zero();
}

zero();
one();
three();
five();
