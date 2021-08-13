class ML {
  constructor() {
    this.attrs =  {}
  }
  process(attrs2) {
    let stats = {goods: 0};
    for (var i = 0; i <= attrs2.tags.length - 1; i ++) {
      stats.goods += this.attrs[attrs2.tags[i]]
    }
    if (stats.goods > 0) {
      return "good"
    } 
    if (stats.goods < 0) {
      return "bad"
    } 
    if (stats.goods == 0) {
      return "equal"
    } 
  }
  train(attribute, points) {
    this.attrs[attribute] = points
  }
}
class Item {
  constructor (tags, title) {
    this.tags = tags;
    this.title = title;
  }
}

let food_classifier = new ML();
let hamburger = new Item(["edible", "tasty", "unhealthy"], "hamburger");
let carrot = new Item(["edible", "tasty"], "carrot");
food_classifier.train("edible", +1);
food_classifier.train("tasty", +3);
food_classifier.train("unhealthy", -10);
console.log(food_classifier.process(hamburger));
console.log(food_classifier.process(carrot));