# nfmt
Opinionated javascript formatter inspired by golang fmt. Because it just looks cooler this way.

## install
```
yarn global add nfmt
```

## usage
In any directory containing `.js` files run `nfmt [path]` in the command line and all the files will be formatted. `path` is optional.
``` bash
> nfmt ./src/
```

## api
``` javascript
import next from 'nfmt'
...
// next :: String -> String
next(source) // => FormatedCode
```
