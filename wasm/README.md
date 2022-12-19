## Wasmer

```
brew install wasmer
emcc -s WASM=1 -o greet.wasm greet.c
wasmer greet.wasm
```

## GraalWasm

```
gu install wasm 
emcc -s WASM=1 -o greet.wasm greet.c
wasm greet.wasm
```

## Links

* [`wasmer`](https://wasmer.io/) the universal WebAssembly runtime.
* [`graalwasm](https://www.graalvm.org/reference-manual/wasm/) the graalvm implementation of WebAssembly.