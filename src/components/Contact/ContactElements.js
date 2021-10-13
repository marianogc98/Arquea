import styled, {css} from 'styled-components';

const sharedStyles = css`
    background-color: #f7f7f7;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`;

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 40px;
    background-color: #F7F7F7;

`;

export const ContactH2 = styled.div`
    font-size: 2rem;
    color: #F7F7F7;
    padding-bottom: 20px;
    font-weight: 400;
    text-align: center;
`;

export const Contactlabel = styled.div`
    color: #fafafa;
`;

export const ContactForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #269880;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.2);
`;

export const ContactInput = styled.input`
    display: block;
    width:100%;
    outline: none;
    ${sharedStyles}
`;

export const ContactTextArea = styled.textarea`
    width: 100%;
    outline: none;
    min-height: 100px;
    resize: none;
    ${sharedStyles}
`;

export const ContactButton = styled.button`
    display: block;
    margin:auto;
    background-color: #269880;
    width: 50%;
    color: #fff;
    font-size: .9rem;
    border: 2px solid #1A6B5A;
    border-radius: 10px;
    height: 40px;
    padding: 0 20px;
    cursor: pointer;
    box-sizing: border-box;

    &:hover{
        background-color: #1A6B5A;
    }
`;

export const ContactError = styled.div`
    color: red;
    font-weight: 800;
    margin: 0 0 40px 0;
`;