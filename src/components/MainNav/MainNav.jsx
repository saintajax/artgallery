import { NavItem, Wrapper } from './MainNav.styled';

const pages = ['Work', 'Exhibition', 'About', 'News', 'Contacts'];

export const MainNav = () => {
  return (
    <Wrapper>
      {pages.map(page => (
        <NavItem to={`/${page}`}>{page}</NavItem>
      ))}
    </Wrapper>
  );
};
