# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by an incorrect use of the `useEffect` hook.

The `bug.js` file contains a component with a `useEffect` hook that updates the state variable `count` without including `count` in the dependency array. This causes the effect to run repeatedly, leading to an infinite loop.

The `bugSolution.js` file shows the corrected code, where `count` is added to the dependency array, fixing the infinite loop.
