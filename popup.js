'use strict';

new Vue({
    el: '#app',
    data: {
        inicio: true,
        horaSaida: null,
    },
    methods: {
        calcularSaida() {
            this.inicio = false;
            var horaChegada = document.getElementById("horaChegada").value;
            var horaSaida = document.getElementById("horaSaida").value;
            var horaRetorno = document.getElementById("horaRetorno").value;
    
            const dateChegada = new Date();
            const dateSaida = new Date();
            const dateRetorno = new Date();
    
            dateChegada.setHours(horaChegada.split(":")[0]);
            dateChegada.setMinutes(horaChegada.split(":")[1]);
            dateChegada.setSeconds(0);
    
            dateSaida.setHours(horaSaida.split(":")[0]);
            dateSaida.setMinutes(horaSaida.split(":")[1]);
            dateSaida.setSeconds(0);
    
            dateRetorno.setHours(horaRetorno.split(":")[0]);
            dateRetorno.setMinutes(horaRetorno.split(":")[1]);
            dateRetorno.setSeconds(0);
    
            var horaManha = dateSaida.getTime() - dateChegada.getTime();
    
            var millisecondToFinish = (28800000 - horaManha);
    
            dateRetorno.setTime(dateRetorno.getTime() + millisecondToFinish);
    
            this.horaSaida = dateRetorno.toLocaleTimeString();
        }
    }
});

//@ sourceURL=popup.js