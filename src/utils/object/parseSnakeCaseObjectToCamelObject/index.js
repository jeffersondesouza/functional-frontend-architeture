const manyUnderlinesReg = new RegExp(/__*/g);
const underFollowedByCharReg = new RegExp(/_(\w)/g);
const underlineAtEndReg = new RegExp(/_$/g);

const toCamelCase = word =>
  word
    .replace(manyUnderlinesReg, "_")
    .replace(underFollowedByCharReg, x => x.toUpperCase())
    .replace(underFollowedByCharReg, "$1")
    .replace(underlineAtEndReg, "");

const objectPropertyNames = object => Object.getOwnPropertyNames(object);

const isObject = object => object && typeof object === "object";

const deepCopyOnCamel = object => {
  let camelCaseCopy = object;

  if (isObject(object)) {
    camelCaseCopy = new object.constructor();
    objectPropertyNames(object).forEach(prop => {
      return (camelCaseCopy[toCamelCase(prop)] = deepCopyOnCamel(object[prop]));
    });
  }

  return camelCaseCopy;
};

export default deepCopyOnCamel;
