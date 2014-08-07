
 var test = require(['test', 'Graph'], function (test, Graph) {
  
  console.log("required test: ", test)
  console.log("required graph: ", Graph)

  var canvas1 = $('#canvas_step1')[0]

  var graph1 = new Graph(canvas1)

  console.log("graph1: ", graph1)

});


