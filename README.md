[![](https://img.shields.io/npm/v/osu-skin-ini?color=AD745F&style=for-the-badge)](https://www.npmjs.org/package/osu-skin-ini)
[![](https://img.shields.io/bundlephobia/min/@aqilcont/osu-skin-ini?color=5FAE89&label=size&style=for-the-badge)](https://www.npmjs.org/package/osu-skin-ini)
[![](https://img.shields.io/npm/dm/osu-skin-ini?color=625FAD&style=for-the-badge)](https://npm-stat.com/charts.html?package=osu-skin-ini)
![](https://img.shields.io/npm/l/osu-skin-ini?color=AD5F8C&style=for-the-badge)


# Installation

```
npm i osu-skin-ini
```

## Read

```javascript
const { Parse } = require('osu-skin-ini')

const main = () => {
  const FILE_PATH = 'YOUR_PATH'

  const parse = Parse(FILE_PATH)
  console.log(parse)
}

main()
```

## Write

```javascript
const { Write } = require('osu-skin-ini')

const main = () => {
  const FILE_PATH = 'YOUR_PATH'

  const write = Write(FILE_PATH, ini_object)
  console.log(write)
}

main()
```

## Modify and write

```javascript
const { Parse, Write } = require('osu-skin-ini')

const main = () => {
  const FILE_PATH = 'YOUR_PATH'
  const parse = Parse(FILE_PATH)

  parse.Author = 'some_guy'

  const write = Write(FILE_PATH, parse)
  console.log(write)
}

main()
```

# Installation

```
npm i osu-skin-ini
```

## Read

```javascript
const { Parse } = require('osu-skin-ini')

const main = () => {
  const FILE_PATH = 'YOUR_PATH'

  const parse = Parse(FILE_PATH)
  console.log(parse)
}

main()
```

## Write

```javascript
const { Write } = require('osu-skin-ini')

const main = () => {
  const FILE_PATH = 'YOUR_PATH'

  const write = Write(FILE_PATH, ini_object)
  console.log(write)
}

main()
```

## Modify and write

```javascript
const { Parse, Write } = require('osu-skin-ini')

const main = () => {
  const FILE_PATH = 'YOUR_PATH'
  const parse = Parse(FILE_PATH)

  parse.Author = 'some_guy'

  const write = Write(FILE_PATH, parse)
  console.log(write)
}

main()
```
