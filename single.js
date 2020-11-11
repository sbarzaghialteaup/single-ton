let instance;

class SingleTon {
  static initialize() {
    instance = new SingleTon();
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
