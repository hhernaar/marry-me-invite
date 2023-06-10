import { Navbar } from '../components';
import { CountdownPage, GuestPage } from '../pages'

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <section id='main-container' className='container'>
        <CountdownPage />
        <GuestPage />
      </section>
    </>
  );
};
