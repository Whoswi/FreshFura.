import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4rem 1rem;
  margin: 0 auto;
  max-width: 1280px;
  font-family: 'Poppins', sans-serif;
`;

const Title = styled.h2`
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2rem;
    font-weight: 700;
    color: #e10012;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  padding: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Pair = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  text-align: center;

  img {
    width: 100%;
    max-width: 100%;
    border-radius: 12px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
  }

  h3 {
    margin-top: 0.5rem;
    font-size: 0.95rem;
    color: #555;
    font-weight: 600;
  }
`;

const Gallery = () => (
    <Wrapper id="Gallery">
      <Title>NASZE REALIZACJE</Title>
      <Grid>
        {[
          ["zdj7.jpeg", "zdj8.jpeg"],
          ["zdj3.jpeg", "zdj4.jpeg"],
          ["zdj6.jpeg", "zdj5.jpeg"],
          ["zdj9.jpeg", "zdj10.jpeg"],
        ].map(([before, after], index) => (
            <Card key={index}>
              <Pair>
                <ImageWrapper>
                  <img src={before} alt={`Przed czyszczeniem ${index + 1}`} />
                  <h3>Przed</h3>
                </ImageWrapper>
                <ImageWrapper>
                  <img src={after} alt={`Po czyszczeniu ${index + 1}`} />
                  <h3>Po</h3>
                </ImageWrapper>
              </Pair>
            </Card>
        ))}
      </Grid>
    </Wrapper>
);

export default Gallery;
