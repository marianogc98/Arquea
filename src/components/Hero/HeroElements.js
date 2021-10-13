import styled from 'styled-components';

export const HeroContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#282828' : '#F7F7F7')};
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;

export const HeroWrapper = styled.div`
    display: flex; 
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 1200px;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
    
`;

export const HeroRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px;
    
    @media screen and (max-width: 768px) {
        width: 100%;
        color: #fff;
        justify-content: flex-start;
        align-items: center;
        margin: 0;
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    width: 40%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    width: 60%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
    //grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 600px;
    padding-top: 0;
    padding-bottom: 60px;
    width: 100%;
`

export const TopLine = styled.p`
    color: #269880;
    font-size:16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? 'black' : '#016060')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? 'grey' : 'grey')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 1200px;
    height: 100%;

    @media screen and (max-width: 768px){
        max-width: 800px;
    }
`;


export const Img = styled.img`
    width: 750px;
    margin: 0 0 10px 0;
    padding-right: 0;

    @media screen and (max-width: 900px){
        width: 450px;
    }

    @media screen and (max-width: 768px){
        width: 400px;
    }

    @media screen and (max-width: 420px){
        width: 300px;
    }
`;
