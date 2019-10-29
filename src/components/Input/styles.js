import styled from 'styled-components';

export const InputWrapper = styled.div`
    margin-bottom: 1rem;
`;

export const InputBase = styled.input`
    display: block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    :hover {
        color: #495057;
        background-color: #fff;
        border-color: #C15554;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);
    }
`;

export const Label = styled.label`
    display: inline-block;
    margin-bottom: 0.5rem;
`;

export const FeedbackMessage = styled.small`
    display: block;
    margin-top: 0.25rem;
    font-weight: 400;
    font-size: 0.6rem;
    color: red;
    text-align: right;
`;
