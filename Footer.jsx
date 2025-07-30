import styled from "styled-components";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    const StyledFooter = styled.footer`
        background-color: #111;
        color: #f1f1f1;
        padding: 60px 80px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        text-align: center;
        font-family: 'Poppins', sans-serif;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 40px 20px;
        }

        p {
            margin: 0;
            font-size: 0.95rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
        }
    `;

    const StyledSpan = styled.span`
        color: #e10012;
        font-weight: 600;
    `;

    const Copyright = styled.p`
        grid-column: 1 / -1;
        text-align: center;
        margin-top: 20px;
        font-size: 0.85rem;
        color: #888;
    `;

    return (
        <StyledFooter id="contact">
            <p><FaPhoneAlt /> <StyledSpan>570 802 623</StyledSpan></p>
            <p><FaEnvelope /> <StyledSpan>fresh.fura7@gmail.com</StyledSpan></p>
            <p><FaMapMarkerAlt /> <StyledSpan>Luboń k/ Poznania</StyledSpan></p>
            <Copyright>&copy;2025 FreshFura. Wszelkie prawa zastrzeżone.</Copyright>
        </StyledFooter>
    );
};

export default Footer;