const horaMiddleware = (req, res, next) => {
    
        const horaActual = new Date(); 
        
        const horas = horaActual.getHours().toString().padStart(2, '0') 
        const minutos = horaActual.getMinutes().toString().padStart(2, '0') 
        const segundos = horaActual.getSeconds().toString().padStart(2, '0') 
        const formatHours= `${horas}:${minutos}:${segundos}`; 
    
        req.dataType = `Son las ${formatHours} H.`

        next()

};

module.exports = horaMiddleware
