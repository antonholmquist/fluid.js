fluidjs


Example WebGL:

http://www.ibiblio.org/e-notes/webgl/gpu/fluid.htm

## Navier-Stokes

Represents conservation of mometum in a fluid.



1. 1D linear convection (Lecture 2: 25:42)

http://mathrule.wordpress.com/2012/01/13/step-1-1d-linear-convection/

The ultimate simplification. Removed non-linearity. C transport velocity.

u is anything.

Initial profile u(x,t = 0) = u0(x)

After time t, u(x) is just the initial profile displased with distance x = ct



δu / δt + cδu / δx = 0


Solution: u(x,t) = u0(x - xt)


Wave propagation, and that means pure convection!