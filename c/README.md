## Usage

```
brew install emscripten
emcc -o index.html src/lib.c --js-library src/lib.js -O1 -s WASM=1 --shell-file template/template.html -s NO_EXIT_RUNTIME=0  -s EXPORTED_RUNTIME_METHODS=ccall
npx serve
```

## Links
* [`emscripten`](https://emscripten.org/) for compiling c and c++ to WebAssembly.

