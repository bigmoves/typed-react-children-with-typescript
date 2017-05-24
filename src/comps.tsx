import React, { SFC } from 'react';

export const Foo = () => <p>Hello!</p>;

interface StringChildrenProps {
  a: number;
  b: string;
  children: string;
}

export const ChildrenMustBeString = ({ a, b, children }: StringChildrenProps) =>
  <div>This is a: {a}, b: {b}, children: {children}.</div>;

interface EmptyChildrenProps {
  a: number;
  b: string;
  children?: undefined;
}

export const ChildrenMustBeEmpty = ({ a, b, children }: EmptyChildrenProps) =>
  <div>This is a: {a}, b: {b}, children: {children}.</div>;

interface ElementChildrenProps {
  a: number;
  b: string;
  children: JSX.Element;
}

export const ChildrenMustBeElement = ({ a, b, children }: ElementChildrenProps) =>
  <div>This is a: {a}, b: {b}, children: {children}.</div>;

interface ElementsChildrenProps {
  a: number;
  b: string;
  children: JSX.Element[];
}

export const ChildrenMustBeElements = ({ a, b, children }: ElementsChildrenProps) =>
  <div>This is a: {a}, b: {b}, children: {children}.</div>;

interface FunctionChildrenProps {
  a: number;
  b: string;
  children: (a: number, b: string) => JSX.Element;
}

export const ChildrenMustBeFunction = ({ a, b, children }: FunctionChildrenProps) =>
  <div>This is a: {a}, b: {b}, children: {children(a, b)}.</div>;
