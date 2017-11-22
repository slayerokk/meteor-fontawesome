Package.describe({
    name: 'slayerokk:fontawesome',
    version: '0.0.1',
    summary: 'Includes FontAwesome 4.7.0 in Meteor Project',
    git: 'https://github.com/slayerokk/meteor-fontawesome.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.addFiles([
        'css/font-awesome.min.css'
    ], 'client');
    api.addAssets([
        'fonts/FontAwesome.otf',
        'fonts/fontawesome-webfont.eot',
        'fonts/fontawesome-webfont.svg',
        'fonts/fontawesome-webfont.ttf',
        'fonts/fontawesome-webfont.woff',
        'fonts/fontawesome-webfont.woff2',
    ], 'client');
});