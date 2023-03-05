```js
const mix = require('laravel-mix');
require('mix-tailwindcss');

// Options
let setPub = './dist';
mix.setPublicPath(setPub);

// Front-end
mix.js('source/theme.js', 'js');

mix.sass('source/theme.scss', 'css')
.tailwind();

// Version
if (mix.inProduction()) {
mix.version();
}

// mix.browserSync('domain.local');
mix.browserSync({
server: "./"
// proxy: 'https://local.site',
});
mix.options({
processCssUrls: false
});
mix.webpackConfig({
stats: {
children: true,
},});


```