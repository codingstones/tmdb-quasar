# TMdb Catalog

![Tmdb][condemor.gif]

## Getting Started!

You will need to register in [themoviedb](https://www.themoviedb.org/documentation/api) to create your API_KEY 
Once you have an API_KEY you need to edit /src/app/services/repositories/tmdb-repository.js and paste it oin:

```
function tmdbCommand(sufix, payload) {
  ...
    api_key: process.env.API_KEY // Replace this with your own API_KEY
  ...
}
```

``` bash
# install dependencies
$ yarn install
or
$ npm install

# run tests
$ jest --watch

# serve with hot reload at localhost:8080
$ yarn dev mat
or
$ npm run dev mat

# 'mat' was the material theme, try iOS with
$ yarn dev ios
or
$ npm run dev ios

# build for production with minification
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
