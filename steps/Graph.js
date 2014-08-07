define([], function () {



  function Graph(canvas, options) {

    var context = canvas.getContext("2d");
    context.fillStyle = "#FF0000";
    context.fillRect(0,0,150,75);
    this.context = context;

    this.options = options;

    this.minX = 0
    this.maxX = 0

    this.minY = 0;
    this.maxY = 5;
  }




  Graph.prototype.setValues = function(x, y) {
    this.x = x;
    this.y = y;

    console.log("this: ", this)

    this.draw();
  }

  Graph.prototype.draw = function() {
    console.log("draw: ", this.draw)

    var context = this.context




    context.beginPath();
    context.moveTo(0, 0);
    
    context.lineTo(450, 50);
    context.stroke();
  }

  

  return Graph;
    

});


