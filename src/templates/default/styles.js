import styled from 'styled-components';
import { mediaQuery } from '../../utils/helpers';

export const Container = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 40px);
    max-width: 800px;
    margin: 0 auto;
`;

export const Header = styled.header`
    display: flex;
    width: 100%;
    padding: 8px;

    ${mediaQuery.inMobile(`
        justify-content: center;
    `)}
`;

export const Logo = styled.img`
    width: 80px;
`;

export const Content = styled.section`
    margin-top: 20px;
    padding: 8px;
`;
