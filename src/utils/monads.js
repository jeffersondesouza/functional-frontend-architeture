const VALUE = Symbol("Value");

class Container {
  constructor(x) {
    this[VALUE] = x;
  }

  static of(x) {
    return new Container(x);
  }

  map(fn) {
  
    return fn(this[VALUE]);
  }

  toString() {
    return `${this.constructor.name}(${this[VALUE]})`;
  }

  valueOf() {
    return this[VALUE];
  }

  get(defaultValue) {
    return !this[VALUE] ? defaultValue : this[VALUE];
  }
}

class Functor extends Container {
  static of(x) {
    return new Functor(x);
  }

  map(fn) {
    return Functor.of(fn(this[VALUE]));
  }
}

class Nothing extends Functor {
  isNothing() {
    return true;
  }
  toString() {
    return "Nothing()";
  }
  map() {
    return this;
  }
  orElse(v) {
    return this.isNothing() ? v : this.valueOf();
  }
}

class Just extends Functor {
  isNothing() {
    return false;
  }
  map(fn) {
    return Maybe.of(fn(this[VALUE]));
  }
}

class Maybe extends Functor {
  constructor(x) {
    return x === undefined || x === null ? new Nothing() : new Just(x);
  }
  static of(x) {
    return new Maybe(x);
  }
}

class Monad extends Functor {
  static of(x) {
    return new Monad(x);
  }
  map(fn) {
    return Monad.of(fn(this[VALUE]));
  }
  unwrap() {
    const myValue = this[VALUE];
    return myValue instanceof Container ? myValue.unwrap() : this;
  }
  chain(fn) {
    return this.map(fn).unwrap();
  }
  ap(m) {
    return m.map(this.valueOf());
  }
}

class Left extends Monad {
  isLeft() {
    return true;
  }
  map(fn) {
    return this;
  }
}
class Right extends Monad {
  isLeft() {
    return false;
  }
  map(fn) {
    return Either.of(null, fn(this[VALUE]));
  }
}

class Either extends Monad {
  constructor(left, right) {
    return right === undefined || right === null
      ? new Left(left)
      : new Right(right);
  }
  static of(left, right) {
    return new Either(left, right);
  }
}

export class Try extends Either {
  constructor(fn, msg) {
    try {
      return Either.of(null, fn());
    } catch (e) {
      return Either.of(msg || e, null);
    }
  }
  static of(fn, msg) {
    return new Try(fn, msg);
  }
}

export default Maybe;
