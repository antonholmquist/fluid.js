
 var test = require(['test', 'Graph', '1'], function (test, Graph, stepOne) {
  
  
  console.log("required test: ", test)
  console.log("required graph: ", Graph)

  var canvas1 = $('#canvas_step1')[0]

  var graph1 = new Graph(canvas1)

  var x = [0,1,2,3,4]
  var y = [0,2,2,3,4]

  graph1.setValues(x,y)

  

});


