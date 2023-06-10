export const Navbar = () => {
    return (
        <nav className='nav-container fixed-top'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-end'>
                    <i className='fa-solid fa-bars' data-bs-toggle='offcanvas' 
                    data-bs-target='#menu-mobile' aria-controls='menu-mobile' />
                </div>
            </div>

            <div className='offcanvas offcanvas-end header-mobile-container' tabIndex='-1' id='menu-mobile'>
                <div className='offcanvas-header d-flex justify-content-end'>
                    <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close' />
                </div>
                <div className='offcanvas-body'>
                    <p>Place offcanvas content here.</p>
                </div>
            </div>
        </nav>
    )
}
