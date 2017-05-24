import React from 'react';
import { render } from 'react-dom';
import {
  Foo,
  ChildrenMustBeString,
  ChildrenMustBeEmpty,
  ChildrenMustBeElement,
  ChildrenMustBeElements,
  ChildrenMustBeFunction
} from './comps';

// You see no TypeScript specific code in this file, but everything is correctly type checked.
// Even the callback inside <ChildrenMustBeFunction/> knows that `a` is a number and `b` is a string.
render(
  <div>
    <ChildrenMustBeString a={1} b="a">
      Hello
    </ChildrenMustBeString>

    <ChildrenMustBeEmpty a={1} b="a"/>

    <ChildrenMustBeElement a={1} b="a">
      <Foo/>
    </ChildrenMustBeElement>

    <ChildrenMustBeElements a={1} b="a">
      <Foo />
    </ChildrenMustBeElements>

    <ChildrenMustBeFunction a={1} b="a">
      {(a, b) => <p>This is a: {a}, b: {b}.</p>}
    </ChildrenMustBeFunction>
  </div>,
  document.getElementById('app')
);
