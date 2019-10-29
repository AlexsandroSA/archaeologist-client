import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkBase = styled(Link)`
    color: red;

    &:hover {
        color: gold;
    }
`;
