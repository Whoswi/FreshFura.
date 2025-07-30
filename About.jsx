// About.js
import React, { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { isFriday, isSaturday, isSunday } from "date-fns";
import { FaPumpSoap, FaWind, FaBroom, FaCalendarAlt } from "react-icons/fa";
import "./DatePickerStyles.css";
import { registerLocale } from "react-datepicker";
import pl from "date-fns/locale/pl";
import emailjs from '@emailjs/browser';
import BenefitsSection from "./BenefitsSection";
import LocationSection from "./LocationSection";

registerLocale("pl", pl);

const SectionWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 40px 80px;
    gap: 40px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        gap: 24px;
    }

`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; /* lub flex-start */
  gap: 24px;
`;

const RightColumn = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 16px;
`;



const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 26px;
  cursor: pointer;
  color: #888;
  transition: color 0.3s ease;

  &:hover {
    color: #e10012;
  }
`;

const ModalContent = styled.div`
    background: #ffffff;
    padding: 40px 30px;
    border-radius: 16px;
    width: 100%;
    max-width: 520px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    position: relative;
    font-family: 'Poppins', sans-serif;

    h3 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #e10012;
        text-align: center;
    }

    p {
        font-size: 16px;
        margin-bottom: 20px;
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 16px;

        input,
        textarea {
            padding: 12px 16px;
            font-size: 15px;
            border: 1px solid #ccc;
            border-radius: 10px;
            transition: border-color 0.2s;
            font-family: 'Poppins', sans-serif;

            &:focus {
                border-color: #e10012;
                outline: none;
            }
        }

        textarea {
            resize: vertical;
            min-height: 100px;
        }

        button {
            background-color: #e10012;
            color: white;
            border: none;
            padding: 14px 24px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &:hover {
                background-color: #c00010;
            }
        }
    }
`;


const StyledAbout = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    padding: 80px 40px;
    @media (max-width: 768px) {
        padding: 40px 20px;
    }
    align-items: center;
    background: linear-gradient(to bottom right, #f5faff, #e0f0ff);
    color: #2c2c2c;
    font-family: 'Poppins', sans-serif;

    & > div {
        padding: 10px;
    }

    img {
        width: 100%;
        max-width: 920px;
        border-radius: 20px;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
        transition: transform 0.3s ease;
    }

    

img:hover {
        transform: scale(1.03);
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 40px 20px;
        text-align: center;
        img {
            max-width: 90%;
            margin: 0 auto;
        }

        .services {
            flex-direction: column;
        }
    }
`;

const StyledSpan = styled.span`
  color: #e10012;
  font-weight: 600;
`;

const ServicesList = styled.ul`
  list-style: none;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin: 30px 0;
  padding: 0;

  li {
    flex: 1 1 160px;
    background: #ffffff;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    text-align: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
    }

    svg {
      font-size: 36px;
      color: #e10012;
      margin-bottom: 12px;
    }

    span {
      display: block;
      font-weight: 600;
      font-size: 15px;
      color: #333;
    }
  }
`;

const BenefitsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;

  div {
    flex: 1 1 200px;
    background-color: white;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
    }

    span {
      display: inline-block;
      font-size: 20px;
      color: #e10012;
      margin-bottom: 10px;
    }
  }
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 20px;

  input,
  textarea {
    padding: 12px 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    transition: border-color 0.2s;

    &:focus {
      border-color: #e10012;
      outline: none;
    }
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

    button {
        background-color: #e10012;
        color: white;
        border: none;
        padding: 14px 28px;
        font-size: 16px;
        border-radius: 12px;
        margin-top: 20px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #b80010;
        }
    }

`;


const About = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_wvqhkwf',    // w emailjs dashboard
            'template_xizscma',   // w emailjs dashboard
            e.target,
            'yhbUpYgI4uiYQftmm'  // w emailjs dashboard
        ).then(() => {
            alert("Dziękujemy! Skontaktujemy się z Tobą.");
            setIsModalOpen(false);
        }, (error) => {
            alert("Błąd wysyłania wiadomości, spróbuj ponownie.");
            console.error(error);
        });
    };

    return (
        <>
        <StyledAbout id="about">
            {isModalOpen && (
                <ModalOverlay onClick={() => setIsModalOpen(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
                        <h3>Umów wizytę</h3>
                        {selectedDate && (
                            <p><strong>Wybrana data:</strong> {selectedDate.toLocaleDateString()}</p>
                        )}
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="date"
                                value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                                readOnly
                                required
                            />
                            <input type="text" name="user_name" placeholder="Imię i nazwisko" required/>
                            <input type="tel" name="user_phone" placeholder="Telefon kontaktowy" required/>
                            <textarea name="message" rows="4" placeholder="Dodatkowe informacje"/>
                            <button type="submit">Wyślij</button>
                        </form>
                    </ModalContent>
                </ModalOverlay>

            )}

            <div>
                <BenefitsSection />
                <img src="auto2.png" alt="Detailing samochodowy Fresh Fura"/>
            </div>

            <div>
                <p>
                    <StyledSpan>Fresh Fura</StyledSpan> to zespół pasjonatów detailingu,
                    którzy z dbałością o każdy detal przywracają świeżość wnętrzom samochodów.
                </p>

                <p>
                    Oferujemy <StyledSpan>profesjonalne czyszczenie tapicerki</StyledSpan>,
                    odkurzanie, pranie tapicerki oraz kompleksowy detailing z użyciem bezpiecznych
                    i skutecznych środków.
                </p>

                <p>
                    Nasze usługi poprawiają nie tylko wygląd, ale również komfort
                    i higienę jazdy – bo wnętrze auta ma znaczenie.
                </p>

                <ServicesList>
                    <li>
                        <FaPumpSoap/>
                        <span>Pranie Tapicerki</span>
                    </li>
                    <li>
                        <FaWind/>
                        <span>Odkurzanie</span>
                    </li>
                    <li>
                        <FaBroom/>
                        <span>Dbałość o szczegóły</span>
                    </li>
                </ServicesList>




                <div
                    style={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: '600',
                        fontSize: '26px',
                        gap: '12px',
                        marginTop: '25px',
                        marginBottom: '20px',
                    }}
                >
                    <FaCalendarAlt style={{color: '#e10012', fontSize: '24px'}}/>
                    <span>Wybierz dogodny termin wizyty:</span>
                </div>



                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => {
                            setSelectedDate(date);
                            setIsModalOpen(true);
                        }}
                        locale="pl"
                        filterDate={(date) => isFriday(date) || isSaturday(date) || isSunday(date)}
                        minDate={new Date()}
                        placeholderText="Kliknij, by wybrać termin"
                        dateFormat="dd/MM/yyyy"
                        inline
                        calendarClassName="custom-calendar"
                    />
                </div>
                <p style={{marginTop: "10px", fontSize: "14px", color: "#666", display: 'flex', justifyContent: 'center' }}>
                    Daty mogą ulec zmianie. Gwarancją wykonania usługi jest kontakt telefoniczny lub SMS.
                </p>
        </div>

        </StyledAbout>

            <LocationSection />
        </>
    );
};

export default About;
