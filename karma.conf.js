module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        basePath: "app/js",
        files: [
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.11/angular.js',
            'https://maps.googleapis.com/maps/api/js?libraries=places',
            'https://jvandemo.github.io/angularjs-google-maps/dist/angularjs-google-maps.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular-mocks/1.5.11/angular-mocks.js',
            'app.js',
            '*!(app.js).js',
        ],
        reporters: ['progress'],
        colors: true,
        browsers: ['Chrome_without_security'],
        customLaunchers: {
            Chrome_without_security: {
                base: 'Chrome',
                flags: ['--disable-web-security']
            }
        }
    })
}

