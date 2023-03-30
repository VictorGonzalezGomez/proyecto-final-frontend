const Features = () => {

    return (
        <div id="system-features" className="p-5 my-4 bg-light rounded-3">
        <div className="container">
            <div className="container-fluid py-1">
                <h1 className="display-5 fw-bold text-center">
                    Caracteristicas
                </h1>
                <p className="fs-4 text-center">Una froma mas sencilla de analizar tus ventas</p>
            </div>

            <div className="container" id="featured-3">
                <div className="row g-4 py-3 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="text-center">
                            <i className="fa fa-user fa-2xl"></i>
                            <h3 className="fs-2">Crea tu Equipo</h3>
                            <p>
                                Añade a tu propio equipo de trabajo para que todos
                                puedan acceder al mismo tiempo a los graficos y datos 
                                analizados sin necesidad de enviar archivos.
                            </p>
                        </div>
                    </div>
                    <div className="feature col">
                        <div className="text-center">
                            <i className="fa fa-chart-simple fa-2xl"></i>
                            <h3 className="fs-2">Grafica tus ventas</h3>
                            <p>
                                Con solo ingresar tus datos en brutos podras 
                                graficar y destacar los datos mas importante 
                                de tus ventas.
                            </p>
                        </div>
                    </div>
                    <div className="feature col">
                        <div className="text-center">
                            <i className="fa fa-computer fa-2xl"></i>
                            <h3 className="fs-2"> Proximamente</h3>
                            <h4 className="fs-5">Sin necesidad de archivos</h4>
                            <p>
                                Grafica tus ventas solo conectandote con nosotros.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Features