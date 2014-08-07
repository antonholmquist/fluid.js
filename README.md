fluidjs

University course:

http://lorenabarba.com/blog/cfd-python-12-steps-to-navier-stokes/

v8 implementation
https://code.google.com/p/v8/source/browse/trunk/benchmarks/navier-stokes.js

For dummies:
https://mikeash.com/pyblog/fluid-simulation-for-dummies.html

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


Space time discretization

i -> indec of grid in x
n -> index of grid in t

Numerical scheme

FD in time
BD in space