pipe-through
===
Synchronously Pipe source Through filters/processors

## Install
```
npm i pipe-through
```



## Usage
This helper is for complex transforms. Here is a silly string transform example:

```
const pipes = require('pipe-through')
pipes(' string ', [
    (s) => s.trim(),
    (s) => s.substring(1)
])   // => 'tring'
```


## API
### pipeThrough( source, procs, ctx )
##### source
Type: `any`  
Source object
##### procs
Type: `Array` of `(source, ctx)=>result`  
Array of filters/processors
##### ctx
Type: `any`, optional  
Context passed to filters  
Usually, an `object`



## LICENSE
MIT
