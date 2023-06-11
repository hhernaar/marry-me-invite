import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components';
import { LandingPage } from '../pages';

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <section id='main-container' className='container'>
        <Routes>
          <Route path='/' element={ <LandingPage /> } />
          <Route path='/*' element={ <Navigate to='/' /> } />
        </Routes>
      </section>
    </>
  );
};
