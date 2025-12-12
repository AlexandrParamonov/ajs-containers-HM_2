export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.errors.set(1, 'count not found');
    this.errors.set(2, 'invalid data');
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
