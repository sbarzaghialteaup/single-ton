let instance;

class SingleTon {
  static initialize(initialValue) {
    instance = new SingleTon();
    instance.set(initialValue);
  }

  static getInstance() {
    return instance;
  }

  set(v) {
    this.value = v;
  }

  get() {
    return this.value;
  }
}

module.exports = SingleTon;
