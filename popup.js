'use strict';

new Vue({
    el: '#app',
    data: {
        inicio: true,
        pessoas: [
            { nome: 'Andre' },
            { nome: 'Andrieli' },
            { nome: 'Alessandro' },
            { nome: 'Cezar' },
            { nome: 'Elias' },
            { nome: 'Emanoeli' },
            { nome: 'Emanuel' },
            { nome: 'Jaylon' },
            { nome: 'Joisson' },
            { nome: 'Laura' },
            { nome: 'Luana' },
            { nome: 'Lucas' },
            { nome: 'Mateus' },
        ],
        facilitador: null,
        secretario: null
    },
    methods: {
        sortear(tipo = null) {
            this.inicio = false;
            if (!tipo || tipo === 'facilitador') {
                this.facilitador = this.novoParticipante();
            }
            
            if (!tipo || tipo === 'secretario') {
                this.secretario = this.novoParticipante();
            }
        },
        novoParticipante() {
            const index = Math.floor(Math.random() * this.pessoas.length);
            const participante = this.pessoas[index];
            this.pessoas.splice(index, 1);
            return participante;
        }
    }
});

//@ sourceURL=popup.js