/*

/ 2. Non Linear convection

δu / δt + u * δu / δx = 0

(Inviscid Burgers' equation)

Adding non-linearity present in Navier-Stokes by putting u 
*/




var step = function(uN, dt, dx, b0, b1, c) {

  var uN1 = []

  // Loop through all values
  for (var i = 0; i < uN.length; i++) {
    var u = uN[i] - uN[i] * dt / dx * (uN[i] - (i > 0 ? uN[i - 1] : b0))

    uN1.push(u)
  }

  return uN1

}



var test = function() {

  var u0 = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  var dt = 0.1
  var dx = 0.1
  var b0 = 1
  var b1 = 1
  var c = 1

  

  var u1 = step(u0, dt, dx, b0, b1, c);
  var u2 = step(u1, dt, dx, b0, b1, c);
  var u3 = step(u2, dt, dx, b0, b1, c);
  var u4 = step(u3, dt, dx, b0, b1, c);
  var u5 = step(u4, dt, dx, b0, b1, c);

  console.log("u t=0: ", u0)
  console.log("u t=1: ", u1)
  console.log("u t=2: ", u2)
  console.log("u t=3: ", u3)
  console.log("u t=4: ", u4)
  console.log("u t=5: ", u5)
}

test();