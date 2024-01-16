import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Main = styled.main`
  margin: 0 auto;
  overflow: hidden;
`;

const MainLayout = () => {
  return (
    <>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default MainLayout;
