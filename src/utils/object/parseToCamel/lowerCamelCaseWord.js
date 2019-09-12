const manyUnderlinesReg = new RegExp(/__*/g);
const underFollowedByCharReg = new RegExp(/_(\w)/g);
const underlineAtEndReg = new RegExp(/_$/g);

export default word =>
  word
    .replace(manyUnderlinesReg, "_")
    .replace(underFollowedByCharReg, x => x.toUpperCase())
    .replace(underFollowedByCharReg, "$1")
    .replace(underlineAtEndReg, "");
