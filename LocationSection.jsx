import React from "react";

const LocationSection = () => {
    const distance = 20;

    return (
        <section style={{
            padding: "20px 24px",
            background: "#fff",
            textAlign: "center",
        }}>
            <h2 style={{ fontSize: "32px", marginBottom: "20px", color: "#e10012" }}>
                Znajdź nas na mapie
            </h2>
            <p style={{ fontSize: "16px", marginBottom: "30px", color: "#493e3e" }}>
                Obsługujemy klientów w promieniu <strong>{distance} km</strong> od Poznania
            </p>

            <div style={{
                width: "100%",
                maxWidth: "900px",
                marginBottom: "50px",
                height: "550px",
                margin: "0 auto",
                borderRadius: "26px",
                overflow: "hidden",
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)"
            }}>
                <iframe
                    title="Mapa Poznania"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97542.91709899865!2d16.80810577822795!3d52.40953834638285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47044533004a2c67%3A0x40c90f2d38a9a00!2sPozna%C5%84!5e0!3m2!1spl!2spl!4v1690292151400!5m2!1spl!2spl"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default LocationSection;
