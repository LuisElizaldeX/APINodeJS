const errorHandler = (err, req, res, next) => {
    let mensaje = 'No se ha podio procesar la petición. Inténtelo nuevamente más tarde'

    if(process.env.NODE_ENV === 'developmente'){
        const statusCode = err.statusCode || 400
        mensaje = err.mensaje || mensaje
        return res.status(statusCode).json({
            succes: false,
            status: err.statusCode,
            mensaje: mensaje,
            stack: err.stack
        })
    }
    return res.status(400).send({ mensaje: mensaje })
}

module.exports = errorHandler