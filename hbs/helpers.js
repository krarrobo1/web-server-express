const hbs = require('hbs');

// helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (txt) => {
    let palabras = txt.split(' ');
    let capitalizadas = palabras.map(palabra => {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return capitalizadas.join(' ');
});