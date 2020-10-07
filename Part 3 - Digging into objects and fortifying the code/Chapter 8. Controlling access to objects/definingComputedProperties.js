const shogun = {
  name: 'Yoshiaki',
  clan: 'Ashikaga',
  get fullTitle() {
    return this.name + ' ' + this.clan;
  },
  set fullTitle(value) {
    [this.name, this.clan] = value.split(' ');
  },
};

module.exports = { shogun };
