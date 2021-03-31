const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  splitPhrase = this.phrase.toLowerCase().split('');
  return this.alphabet.every(element =>  splitPhrase.includes(element));
}

module.exports = PangramFinder;
