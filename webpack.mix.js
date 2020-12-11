const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass("resources/sass/app.scss", "public/dist/css")
    .sass("node_modules/bulma/bulma.sass", "public/dist/css")
    .styles(
        ["node_modules/normalize.css/normalize.css"],
        "public/dist/css/normalize.css"
    )
    .styles(
        ["node_modules/css.gg/icons/all.css"],
        "public/dist/css/css.gg.css"
    )
    .js('resources/js/app.js', 'public/dist/js/app.js')
    .js('resources/js/calendar/index.js', 'public/dist/js/calendar.js')