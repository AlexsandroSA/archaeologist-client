import styled from 'styled-components';

export const CardBase = styled.article`
    position: relative;
    min-height: 100px;
    boder: 1px solid #c1c1c1;
    margin: 8px;
    margin-top: 8px;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 4px;
    padding: 8px;

    button {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 30px;
        height: 30px;
        background-color: #fff;
        border-radius: 15px;
        -webkit-appearance: none;
        border: none;
        color: #E4A367;
        cursor: pointer;
    }
`;

export const Header = styled.header`
    margin-bottom: 8px;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    margin: 0;
    font-size: 1.2rem;
`;

export const Time = styled.time`
    font-size: .6rem;
    color: #c1c1c1;
`;

export const Content = styled.div``;

export const Description = styled.p`
    font-size: .8rem;
    margin: 0;
`;

export const Actions = styled.footer`
    display: none;
    // display: flex;
    justify-content: flex-end;
    margin-top: 8px;

    a {
        display: inline-block;
        margin-left: 8px;
        font-size: .8rem;
        color: #E4A367;
        text-decoration: none;
    }
`;
