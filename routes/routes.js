const {Router} = require('express');

const router = Router();

// Inicio
router.get('/', (req, res) =>{
    res.render('home', {
        nombre: 'Ricardo arrobo'
    });
});

// Manilla Adulto
router.get('/adulto', (req, res) =>{
    res.render('adulto',{
        nombre: 'Cristóbal Sarmiento',
        ciudad: 'Cariamanga, Loja',
        fechaNac: ' 5 de Enero de 1951',
        descripcion: `
        Hola mi nombre es Cristobal Sarmiento, padezco Alzheimer. 
        Si por casualidad me encuentras perdido porfavor comunicate con los contactos a continuacion
        Ellos sabrán que hacer.

        Gracias`
    });
});

// Manilla Nino

router.get('/', (req, res) =>{

});


module.exports = router;