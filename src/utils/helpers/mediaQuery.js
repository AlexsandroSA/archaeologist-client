import breakpoint from '../enums/breakpoint.enum';

export const inMobile = (style = '') => `@media screen and (max-width: ${breakpoint.tablet}px) {
  ${style}
}`;

export const inTablet = (style = '') => `@media screen and (min-width: ${breakpoint.tablet + 1}) and (max-width: ${breakpoint.desktop}) {
  ${style}
}`;

export const inDesktop = (style = '') => `@media screen and (min-width: ${breakpoint.desktop + 1}) {
  ${style}
}`;

export default {
    inMobile,
    inTablet,
    inDesktop,
};
