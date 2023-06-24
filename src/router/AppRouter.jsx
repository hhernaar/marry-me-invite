import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components';
import { LandingPage } from '../pages';

export const AppRouter = () => {
  return (
    <>
      {/*<Navbar />*/}
      <section id='main-container'>
        <Routes>
          <Route path='/marry-me-invite/' element={ <LandingPage /> } />
          <Route path='/*' element={ <Navigate to='/' /> } />
        </Routes>
      </section>
    </>
  );
};
