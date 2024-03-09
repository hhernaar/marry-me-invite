import { Navigate, Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages';

export const AppRouter = () => {

  return (
    <>
      <section id='main-container'>
        <Routes>
          {/*<Route path='/marry-me-invite/:uuid' element={ <LandingPage /> } />*/}
          <Route path='/' element={ <LandingPage /> } />
          <Route path='/*' element={ <Navigate to='/' /> } />
        </Routes>
      </section>
    </>
  );
};
