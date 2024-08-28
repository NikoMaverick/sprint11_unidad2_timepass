const validarHora = (req, res, next) => {

     if(req.hour < 12) {
        res.locals.mensaje = `No seas impaciente, aun no son las 12:00`;
        return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
    next();
}

module.exports = validarhora;