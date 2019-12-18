var Libreria = Backbone.View.extend({

    // atributos básicos de una vista que definen su elemento (el)
    // podemos definir qué tipo de tag HTML va a ser, su clase e id
    // si no se pasa un tagName, <div> es el tag por default
    tagName: 'span',
    className: 'nombreClase',
    id: 'nombreId',

    // otra forma de asignar un elemento (el) a una vista
    // es justamente definiendo la propiedad el, el valor
    // debe ser un selector válido del DOM.
    // Si se elige usar el attr 'el' no harían falta
    // tagName, className e id
    
    // IMPORTANTE! El atributo 'el' define la porción del DOM
    // que la vista será capaz de controlar, por ende
    // no podrá 'ver' elementos que estén por fuera de dicho elto
    // el: '.vista'
    
    // método invocado al instanciar una View
    initialize: function() {
        // algo muy común es llamar al método render()
        // al momento de instanciar la vista
        this.render();
    },

    render: function() {
        this.$el.append('<p>Texto renderizado desde el método render</p>');
    },

    // listado de eventos a los que responde una vista
    // el formato es 'evento selector': 'funcion'
    events: {
        // en este caso se define un evento que detecta
        // un click en el div cambiarColor
        'click .cambiarColor': 'cambiarColor'
    },

    // funcion a ser llamada por el evento
    cambiarColor: function() {
        this.$el.css('color', 'red');
    }
});

// se instancia un nuevo objeto de tipo Libreria (que extiende de la clase View)
// como no le decimos que 'el' va a tener, usa el que esté
// definido en la declaración
var appView = new Libreria();
console.log(appView.el);

// el atributo el puede ser definido tanto en la declaración como
// en la especificación.
var appViewEl = new Libreria({
    el: '.vista'
});
console.log(appViewEl.el);

// se puede anteponer el signo $ al elto
// esto hará que se devuelva el elto
// como un objeto de JQuery y así poder encadenar
// métodos de JQuery
appViewEl.$el.append('Texto modificado por JQuery');

// llamando a la función render se ejeccuta lo que hayamos definido
// comentar la línea si se quiere probar la de JQuery
appViewEl.render();