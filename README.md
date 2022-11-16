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
