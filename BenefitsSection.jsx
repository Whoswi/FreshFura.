// components/BenefitsSection.jsx
import React from "react";
import styled from "styled-components";

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
  }
`;

const BenefitsSection = () => (
    <>
        <h3 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '20px' }}>
            Dlaczego warto wybrać Fresh Fura?
        </h3>

        <BenefitsGrid style={{ marginBottom: '30px' }}>
            <div>✅ Wieloletnie doświadczenie – możesz nam zaufać, a Twoje auto zyska drugie życie</div>
            <div>✅ Najlepsze środki i sprzęt – jakość to u nas podstawa!</div>
            <div>✅ Uśmiechy zadowolonych klientów – to nas cieszy najbardziej :)</div>
            <div>✅ Elastyczne terminy – dopasujemy się do Ciebie!</div>
        </BenefitsGrid>
    </>
);


export default BenefitsSection;
