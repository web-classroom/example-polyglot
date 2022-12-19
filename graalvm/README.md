## Usage

```bash
sdk install java 22.3.r19-grl
sdk use java 22.3.r19-grl
gu install nodejs
gu install python
gu install ruby
export PATH=~/.sdkman/candidates/java/22.3.r19-grl/bin/:$PATH
npm install -g node-gyp --nodedir=~/.sdkman/candidates/java/22.3.r19-grl/languages/nodejs
export PATH=~/.sdkman/candidates/java/22.3.r19-grl/languages/nodejs/bin/:$PATH
node-gyp configure --nodedir=~/.sdkman/candidates/java/22.3.r19-grl/languages/nodejs
node-gyp build
javac Addon.java
node --jvm --polyglot hello.js
```

## Links

* [`sdkman`](https://sdkman.io/jdks) for installing graalvm.