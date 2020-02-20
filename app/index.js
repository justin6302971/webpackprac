

const result=butter(4, 5, 6);
console.log(result);

function butter(...b) {
  let a = [1, 2];
  a.push(...b)
  return a;
}
