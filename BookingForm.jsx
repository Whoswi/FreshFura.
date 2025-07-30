import { useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const BookingSection = styled.section`
    padding: 100px 20px;
    background-color: #111;
    color: white;
    font-family: "Montserrat", sans-serif;
`;

const Form = styled.form`
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;

    input,
    textarea {
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
    }

    button {
        background-color: #ff3c3c;
        color: white;
        border: none;
        padding: 14px;
        font-weight: bold;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
            background-color: #c70000;
        }
    }
`;

const BookingForm = () => {
    const [userName, setUserName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_wvqhkwf", // <-- Zamień na swój
                "template_xizscma", // <-- Zamień na swój
                {
                    user_name: userName,
                    user_phone: userPhone,
                    message: message,
                },
                "yhbUpYgI4uiYQftmm" // <-- Zamień na swój
            )
            .then(() => {
                alert("Dziękujemy! Zgłoszenie zostało wysłane.");
                setUserName("");
                setUserPhone("");
                setMessage("");
            })
            .catch((err) => {
                alert("Błąd przy wysyłaniu. Spróbuj ponownie.");
                console.error(err);
            });
    };

    return (
        <BookingSection id="booking">
            <h2 style={{textAlign: "center", marginBottom: "30px", fontSize: "35px"}}>Masz jakieś pytania? Odpowiemy na wszystko w ciągu 24h.</h2>



            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Imię i nazwisko"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Telefon kontaktowy"
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    required
                />
                <textarea
                    rows="4"
                    placeholder="Treść"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit">Wyślij</button>
            </Form>
        </BookingSection>
    );
};

export default BookingForm;
