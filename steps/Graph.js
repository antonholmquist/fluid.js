


define([], function () {

  var graph = function(canvas) {

    var context = canvas.getContext("2d");
    context.fillStyle = "#FF0000";
    context.fillRect(0,0,150,75);
    this.context = context;

  }

  return graph
    
});


