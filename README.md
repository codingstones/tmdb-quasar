# TMdb Catalog

You can check the app running [HERE!](https://codingstones.github.io/tmdb-quasar)

<img src="/art/condemor.gif?raw=true" width="400px">

## Getting Started!

You will need to register in [themoviedb](https://developers.themoviedb.org/3/getting-started/authentication) to create your API_KEY (for version v3).
Once you have an API_KEY you need to rename /config/secrets2.js to /config/secret.js and paste your API_KEY.

### install dependencies
``` bash
$ yarn install
```
or
``` bash
$ npm install
```

###  run tests
``` bash
$ jest --watch
```

###  serve with hot reload at localhost:8080
``` bash
$ yarn dev mat
```
or
``` bash
$ npm run dev mat
```

### 'mat' was the material theme, try iOS with
``` bash
$ yarn dev ios
```
or
``` bash
$ npm run dev ios
```

###  build for production with minification
``` bash
$ quasar build
```

## Going Mobile!

You may want to wrap the App into a native mobile App. Given you already have Cordova and an Android or iOS SDK installed in your system, run:


```
quasar wrap cordova
cordova platform add android
cordova run android
```

For full details, take a look to the Quasar [guide](http://quasar-framework.org/guide/cordova-wrapper.html).
