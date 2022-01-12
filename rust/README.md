## Usage

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
wasm-pack build --target web
wasm-pack test --headless --firefox
npx serve
```

## Links
* [`rustup`](https://www.rust-lang.org/learn/get-started) for installing rust.
* [`wasm-pack`](https://rustwasm.github.io/wasm-pack/installer/) for generating WebAssembly.
* [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) for communicating
  between WebAssembly and JavaScript.
* [`console_error_panic_hook`](https://github.com/rustwasm/console_error_panic_hook)
  for logging panic messages to the developer console.
* [`wee_alloc`](https://github.com/rustwasm/wee_alloc), an allocator optimized
  for small code size.
