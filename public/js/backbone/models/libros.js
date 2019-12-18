// lo que hay que entender bien de ésta línea es que
// llamar a Backbone.Model.extend() devuelve un CONSTRUCTOR
// y no un objeto Model de Backbone.
// Por ende en la variable Libro queda dicho constructor
// eso explica que después tengamos que instanciar un modelo
// propiamente dicho con new Libro()
var Libro = Backbone.Model.extend({
    // ES RECOMENDABLE
    // No utilizar esta propiedad a menos que el modelo
    // no esté dentro de una colección
    urlRoot: '/libros',

    // función que es llamada cuando se crea una nueva instancia
    initialize: function() {
        console.log('Se ha creado una nueva instancia');
        console.log(this.toJSON());

        // setea un handler que escucha por cambios en el modelo
        // la función se ejecuta cuando algún atributo del modelo cambie
        this.on('change', function() {
            console.log('El modelo ha cambiado');
        });
    },

    // atributos por defecto del modelo
    defaults: {
        titulo: 'Ninguno',
        autor: null,
        categoria: 'Sin Categoria'
    },

    // reglas de validación para el modelo
    // se puede instanciar el modelo pero
    // a la hora de llamar a save() llama primero a validate
    validate: function(attributes) {
        if (!attributes.titulo) {
            return 'Debe tener título.';
        }
    }
});

// se crea un libro con los atributos por defaults
console.log('Libro en defaults:');
var libroBlanco = new Libro();

// se crea un libro dándole atributos al momento de instanciar
console.log('Libro con atributos:');
var primerLibro = new Libro({
    titulo: 'La Odisea',
    autor: 'Homero',
    categoria: 'Literatura'
});

// así se obtiene un atributo en particular del modelo
// o bien el modelo completo pasado a JSON
console.log(primerLibro.get('titulo'));
console.log(primerLibro.toJSON());

// así se puede setear un atributo del modelo
// o bien varios atributos al mismo tiempo
primerLibro.set('autor', 'Desconocido');
console.log(primerLibro.toJSON());

primerLibro.set({
    titulo: 'La Iliada',
    autor: 'Homero'
});
console.log(primerLibro.toJSON());

// fetch from DB
var libroUno = new Libro({
    id: '1'
});

// el método fetch() hace la petición hacia el BE
// el método then() es simplemente para que lo que sigue
// se ejecute recién una vez terminado el fetch()
libroUno.fetch().then(function() {
    console.log(libroUno.toJSON());
    libroUno.set('autor', 'Desconocido_FE');

    // como libroUno tiene id seteado
    // sabe que tiene que llamar a update y no a store
    libroUno.save();
});

// save into DB
var libroDos = new Libro({
    titulo: 'Ficciones',
    autor: 'Jorge Luis Borges',
    categoria: 'Literatura'
});

// este método hace una peticion POST
// tomando como base la urlRoot del modelo
// siempre y cuando no esté definido el attr id
// lo dejo comentado para que no cree libros repetidos
//libroDos.save();

// delete from DB
var libroDelete = new Libro({
    id: '3'
});

// comento para que no se borren libros
//libroDelete.destroy();