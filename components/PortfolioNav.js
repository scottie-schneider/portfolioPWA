import Link from 'next/link';
import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = () => {
  console.log('starting')
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  console.log('done')
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const PortfolioNavStyle = styled.div`
    .main-navigation {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 768px) {
    .main-navigation {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .main-navigation a {
    color: ${props => props.theme.dark};
    text-decoration: none;
    font-size: 1.4rem;
    margin-bottom: 1.4rem;
  }

  @media (min-width: 768px) {
    .main-navigation a {
      margin-bottom: 0;
    }
  }
`

const PortfolioNav = () => (
  <PortfolioNavStyle>
    <nav class="main-navigation">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About Me</a>
        </Link>
        <Link href="/layouts">
          <a>Layouts</a>
        </Link>
        <Link href="/work">
          <a>Clients and Work</a>
        </Link>
      </nav>
  </PortfolioNavStyle>
);

export default PortfolioNav;