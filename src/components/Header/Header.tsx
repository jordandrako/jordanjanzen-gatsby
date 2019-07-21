import { Link as GSLink } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface IHeaderProps {
  siteTitle: string;
}

const Root = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Link = styled(GSLink)`
  color: white;
  text-decoration: none;
`;

const H1 = styled.h1`
  margin: 0;
`;

const Header = (props: IHeaderProps) => (
  <Root>
    <Inner>
      <H1>
        <Link to='/'>{props.siteTitle}</Link>
      </H1>
    </Inner>
  </Root>
);

Header.defaultProps = {
  siteTitle: `Jordan Janzen`,
};

export default Header;
