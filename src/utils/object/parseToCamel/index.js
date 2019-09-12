const manyUnderlinesReg = new RegExp(/__*/g);
const underFollowedByCharReg = new RegExp(/_(\w)/g);
const underlineAtEndReg = new RegExp(/_$/g);

const toLowerCamelCaseWord = word =>
  word
    .replace(manyUnderlinesReg, "_")
    .replace(underFollowedByCharReg, x => x.toUpperCase())
    .replace(underFollowedByCharReg, "$1")
    .replace(underlineAtEndReg, "");

const deepCopy = obj => {
  let aux = obj;

  if (obj && typeof obj === "object") {
    aux = new obj.constructor();
    Object.getOwnPropertyNames(obj).forEach(prop => {
      return (aux[toLowerCamelCaseWord(prop)] = deepCopy(obj[prop]));
    });
  }
  return aux;
};

export default deepCopy;
