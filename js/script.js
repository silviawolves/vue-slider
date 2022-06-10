const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        id: 1,
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        id: 2,
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        id: 3,
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        id: 4,
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        id: 5,
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

new Vue({
    el: '#app',
    data: {
        arraySlides: slides,
        indexImg: 1,
    },
    methods: {
        prevImage: function(){
            this.id -= 1
        },
        nextImage: function(){
            this.id += 1
        }
    },
})





/*
Descrizione:
Far funzionare lo slider partendo dall’html ricevuto.
Al click su una freccia, l’immagine mostrata cambia.
la lista delle thumbs deve essere generata tramite un v-for X
*/