
/*
δu / δt + cδu / δx = 0


Initial Condition:

u = 2 @ x = [0.5:1]
u = 1 @ x everywhere else in (0,2)

Solution:

i: index of grid in x
n: index of grid in t

Discretize x in 0.1 intervals from 0 to 2 (count : 21)
*/



/*
// Given the last value in time return the value for n + 1, for a specific i

  u = array of u values for all x

  dt: step delta t
  dx: stel delta x

  b0: u value. Border condition at left side of x interval
  b1: u value. Border condition at right side of x interval

  return u(n + 1), array with all x
*/
var step = function(uN, dt, dx, b0, b1, c) {

  var uN1 = []

  // Loop through all values
  for (var i = 0; i < uN.length; i++) {
    var u = uN[i] - c * dt / dx * (uN[i] - (i > 0 ? uN[i - 1] : b0))

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

