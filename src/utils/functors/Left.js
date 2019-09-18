import Monad from "./Monad";

class Left extends Monad {
  isLeft() {
    return true;
  }
  map(fn) {
    return this;
  }
}

export default Left;
