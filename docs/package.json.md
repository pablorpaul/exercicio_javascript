```js
{ //Exercicios JavaScript
  "name": "exercicio_javascript",
  "version": "0.0.1",
  "description": "Jovem Programador",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "nodemon index.js",
    "test": "yarn node --experimental-vm-modules $(yarn bin jest)",
    "teste": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/pablorpaul/exercicio_javascript.git"
  },
  "author": "Pablo R Paul",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/pablorpaul/exercicio_javascript/issues"
  },
  "homepage": "https://github.com/pablorpaul/exercicio_javascript#readme",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "jest": "^29.6.4",
    "nodemon": "^3.0.1"
  }
}
```