class Banner {
  constructor(msg) {
    this.border = '+-' + '-'.repeat(msg.length) + '-+';
    this.empty = '| ' + ' '.repeat(msg.length) + ' |';

    this.msg = '| ' + msg + ' |';
  }

  displayBanner() {
    console.log(this.border + '\n' + this.empty + '\n' + this.msg + '\n'
      + this.empty + '\n' + this.border);
  }
}

let trek = new Banner('to boldly go');
trek.displayBanner();

let em = new Banner('');
em.displayBanner();
