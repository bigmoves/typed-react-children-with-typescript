# Typed React `children` with TypeScript

This repository is a basic example which shows you how you can type your `children` in React components.

It shows you how you can enforce:
* to use only a `string` as `children`.
* to *not* allow `children` at all.
* to allow just one `JSX.Element` as `children`.
* to use at least two `JSX.Element`s as `children`.
* to use a function with a certain signature as `children`.

Of course you can mix these types as you which thanks to [union types](https://www.typescriptlang.org/docs/handbook/advanced-types.html). So it possible to allow one _or_ more `JSX.Element`s by using something like `children: JSX.Element | JSX.Element[];`.

To check the example run:

```
$ npm install
$ npm run build
$ npm run serve
# Visit localhost:8080.
```
