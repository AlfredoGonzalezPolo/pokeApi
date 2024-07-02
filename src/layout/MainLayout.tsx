import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Main = styled.main`
  margin: 0 auto;
  padding: 4rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
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
