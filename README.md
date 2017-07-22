# ink-marquee

marquee component for [Ink](https://github.com/vadimdemedes/ink)


## Install
---

```bash
$ npm install ink-marquee
# or
$ yarn add ink-marquee
```

## Usage
---

```js
const { h, render } = require('ink');
const Marquee = require('ink-marquee');

render(<Marquee color="blue" text="long long text" />);
```

## Props

name | type | default | desc
---- | ---- | ---- | ----
text | string | "" | required
color | string | "green" | "red", "green", "blue"... e.t.c. -> see also [chalk](https://github.com/chalk/chalk)
direction | string | "rtl" | flow direction. "rtl": right to left, "ltr": left to right.
speed | number | 500 | flow type. the unit is *millisecond*
width | number | window(terminal) width | flowable area width.
repeat | boolean | true | repeat if flowed

## Example

code:

```js
<Marquee text="12" width={3} direction="ltr" speed={1000} repeat={true} />
```

result:
```
1__
↓ after 1sec
21_
↓ after 1sec
_21
↓ after 1sec
__2
↓ after 1sec
___
↓ after 1sec
1__
```


LICENSE
---

MIT © 2017 y-takey
