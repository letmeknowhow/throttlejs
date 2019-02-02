# throunce
the `throunce` is conflation of two words `throttle` and `debounce`.

## Installation
```sh
$ npm install throunce
```
## Usage

```js
import { throttle, debounce } from 'throunce';

throttle(() => {
  // Throttled function
}, 500);

debounce(() => {
  // Debounced function
}, 500)

```