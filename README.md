# throunce
the `throunce` is conflation of two words `throttle` and `debounce`.

## Installation
```sh
$ npm install @niuxiaoyu/throunce
```
## Example

```js
import { throttle, debounce } from '@niuxiaoyu/throunce';

window.onresize = throttle(resize, 200);

```