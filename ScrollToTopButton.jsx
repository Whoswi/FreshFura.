import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const Button = styled.button`
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #e10012;
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    cursor: pointer;
    color: white;
    font-size: 24px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    opacity: ${(props) => (props.visible ? 1 : 0)};
    pointer-events: ${(props) => (props.visible ? "auto" : "none")};
    transition: opacity 0.3s ease;

    &:hover {
        background-color: #b80010;
    }
`;

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Button
            onClick={scrollToTop}
            visible={visible}
            aria-label="Przewiń do góry"
            title="Przewiń do góry"
        >
            <FaArrowUp />
        </Button>
    );
};

export default ScrollToTopButton;
