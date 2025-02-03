# TypeScript Type Error Not Caught at Compile Time

This repository demonstrates a common type error in TypeScript that is not caught at compile time. The error occurs because the TypeScript compiler does not perform type checking on all code paths at compile time.  This can lead to runtime errors that would be caught by more thorough static analysis in other languages. 

## Bug

The bug is in the `add` function.  The function is declared to take two numbers as arguments, but it is called with a string and a number.  The TypeScript compiler does not catch this error at compile time. The result is a runtime error. 

## Solution

The solution is to add stricter type checking to the code to prevent this kind of error. This can be achieved by adding a runtime check to the `add` function that verifies that the arguments are numbers before performing the addition. 