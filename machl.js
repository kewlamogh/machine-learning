class ML {
  constructor() {
    this.attrs =  {}
  }
  process(attrs2) {
    let stats = {goods: 0};
    for (var i = 0; i <= attrs2.length - 1; i ++) {
      stats.goods += this.attrs[attrs2[i]]
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

let machl = new ML();
machl.train("edible", 1);
machl.train("unhealthy", -10);
console.log(machl.process(["edible", "unhealthy"]))
