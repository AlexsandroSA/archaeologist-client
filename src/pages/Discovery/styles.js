import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    align-items: start;
`;

export const LinkRegister = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    background: #e4a367;
    border-radius: 4px;
    margin: 8px;
    min-height: 80px;
    cursor: pointer;
    color: #fff;
    text-decoration: none;
`;
