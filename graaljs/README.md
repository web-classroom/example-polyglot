## Usage

```bash
sdk install sdk install java 21.3.0.r17-grl
sdk use java 21.3.0.r17-grl
gu install nodejs
export PATH=~/.sdkman/candidates/java/21.3.0.r17-grl/bin/:$PATH
npm install -g node-gyp --nodedir=~/.sdkman/candidates/java/21.3.0.r17-grl/languages/nodejs
export PATH=~/.sdkman/candidates/java/21.3.0.r17-grl/languages/nodejs/bin/:$PATH
node-gyp configure --nodedir=~/.sdkman/candidates/java/21.3.0.r17-grl/languages/nodejs
node-gyp build
javac Addon.java
node --jvm hello.js
```

## Links

* [`sdkman`](https://sdkman.io/jdks) for installing graalvm.