let mix = require('laravel-mix');

mix.sass('src/scss/master.scss', 'dist/css/');

mix.sass('src/scss/master.scss', 'dist/img/').options({
    processCssUrls: false
});
