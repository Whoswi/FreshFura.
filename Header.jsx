import styled from 'styled-components';
import Logo from '../assets/logo1.jpg';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 80px;
    font-size: 30px;
    z-index: 111;
    color: white;

    header {
        background: linear-gradient(158deg, #d60000, #850000 80%);
        font-family: 'Poppins', sans-serif;
    }

    
    
    .branding {
        display: flex;
        align-items: center;
        gap: 15px;

        img {
            width: 150px;
            height: auto;
            border-radius: 50%;
        }

        span {
            font-size: 48px;
            font-weight: bold;
            color: #ffffff;
        }
    }

    ul {
        list-style: none;
        display: flex;
        gap: 20px;

        a {
            text-decoration: none;
            color: rgb(255, 255, 255);
            font-weight: bold;
        }

        a:hover {
            color: #e61313;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        text-align: center;

        ul {
            flex-direction: column;
            align-items: center;
            gap: 12px;
        }

        .branding {
            flex-direction: column;
        }
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <div className="branding">
                <img src={Logo} alt="FreshFura Logo"/>
                <span>FRESH FURA</span>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">O nas</a></li>
                    <li><a href="#services">Usługi</a></li>
                    <li><a href="#booking">Kontakt</a></li>
                    <li><a href="#Gallery">Galeria</a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=61553173574700">facebook</a></li>
                </ul>
            </nav>
        </StyledHeader>


    );
};

export default Header;
