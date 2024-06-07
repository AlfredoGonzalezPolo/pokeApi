import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

const Main = styled.main`
  margin: 0 auto;
  overflow: hidden;
`;

const MainLayout = () => {
  return (
    <>
      <Main>
        <Header />
        <Outlet />
        <Footer />
      </Main>
    </>
  );
};

export default MainLayout;
