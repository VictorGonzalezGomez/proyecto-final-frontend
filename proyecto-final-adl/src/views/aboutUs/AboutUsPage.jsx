import React from "react";
import AboutUs from "../../components/aboutUs/AboutUs";

const AboutUsPage = () => {

  return (
    <>
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center text-center rounded-3 border shadow-lg">
        <div className=" p-3 p-lg-5 pt-lg-3">
          <h2 className="display-4 fw-bold lh-1">¿Quien es nuestro equipo?</h2>
          <p className="lead my-4">
            Nuestro equipo se conforma por 3 estudiantes de la Academia Desafio
            Latam.
            <b>
              <strong> Pablo Goeppinge, Luis Tobar y Victor Gonzalez </strong>
            </b>
            abordaron la problematica de generar una plataforma que facilite el
            analisis y obtencion de datos apartir de un solo archivo, asi dando
            la oportunidad tanto a grandes y pequeñas empresas de rescata los
            datos mas imporntates de sus ventas.
          </p>
        </div>
        <AboutUs />
      </div>
    </>
  );
};

export default AboutUsPage;
