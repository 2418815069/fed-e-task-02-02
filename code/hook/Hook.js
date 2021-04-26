class Hook {
  constructor(args = []) {
    this.taps = []
    this.args = args
    this._x = undefined
  }
  taps (type, options, fn) {
    if (typeof options === 'string' || options === '') {
      throw Error('valid')
    }
  }
  _taps (type, options, fn) {}
}