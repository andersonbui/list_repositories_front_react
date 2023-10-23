## versiones que funciono la anterior vez

node 14
npm 6.14.12

## ejecucion
```
npx expo start
```

## errores

- npm ERR! code EINTEGRITY integrity checksum failed when using sha1
• Go to the project directory
• Remove the node_modules directory: rm -rf node_modules.
• Remove package-lock.json file: rm package-lock.json
• Clear the cache: npm cache clean --force
• Run npm install --verbose
