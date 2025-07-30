import styled from "styled-components";

const Service = () => {
    const Section = styled.section`
        background-color: #f5f5f5;
        padding: 60px 30px;
        display: flex;
        justify-content: center;
    `;

    const ServiceBox = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        background-color: #fff;
        padding: 50px;
        border-radius: 12px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        max-width: 1200px;
        width: 100%;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            padding: 30px 20px;
        }
    `;

    const ServicesList = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;

    const Title = styled.h1`
    font-size: 32px;
    color: #111;
    margin-bottom: 24px;
  `;

    const ServiceItem = styled.div`
    background-color: #f9f9f9;
    padding: 18px 20px;
    border-radius: 8px;
    margin-bottom: 36px;
    font-size: 20px;
    color: #222;
    position: relative;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
        

        &:hover {
            transform: scale(1.03);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
    `;
    const PopularTag = styled.div`
    position: absolute;
    top: -12px;
    right: -12px;
    background-color: #e10012;
    color: white;
    font-size: 13px;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 8px;
  `;

    const Note = styled.p`
    font-size: 14px;
    color: #555;
    margin-top: 20px;
  `;

    const ImageBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      max-width: 380px;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
  `;

    return (
        <Section id="services">
            <ServiceBox>
                <ServicesList>
                    <Title>Nasze usługi obejmują:</Title>

                    <ServiceItem>
                        Czyszczenie wnętrza (bez prania tapicerki) – 180zł
                    </ServiceItem>

                    <ServiceItem>
                        Profesjonalne pranie tapicerki materiałowej – 250zł - 450zł
                        <PopularTag>Najczęściej wybierane</PopularTag>
                    </ServiceItem>

                    <ServiceItem>
                        Czyszczenie i konserwacja tapicerki skórzanej – 280zł - 400zł
                    </ServiceItem>

                    <ServiceItem>
                        Pełny pakiet detailingowy wnętrza – 300zł - 700zł
                    </ServiceItem>

                    <Note>*Cena zależy od stopnia zabrudzenia i rodzaju pojazdu.</Note>
                </ServicesList>

                <ImageBlock>
                    <img src="auto3.png" alt="FreshFura Car Detailing" />
                </ImageBlock>
            </ServiceBox>
        </Section>
    );
};

export default Service;
