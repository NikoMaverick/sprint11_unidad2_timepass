const horaMiddleware = (req, res, next) => {
    
        // RELOJ ACTUALIZADO
        const horaActual = new Date(); // Obtenemos la hora actual con new Date
        
        const horas = horaActual.getHours().toString().padStart(2, '0') // Formateamos las horas
        const minutos = horaActual.getMinutes().toString().padStart(2, '0') // Formateamos los minutos
        const segundos = horaActual.getSeconds().toString().padStart(2, '0') // Formateamos los segundos
        const formatHours= `${horas}:${minutos}:${segundos}`; // Asignamos el reseteo de las horas, minutos y segundos en variables.
    
        req.dataType = `Son las ${formatHours} H.`

        next()

};

module.exports = horaMiddleware
