
export const TextCenter = ({ children, classes }) => {
    return (
        <div className='col-12 d-flex justify-content-center'>
            <span className={classes}>
                {children}
            </span>
        </div>
    )
}
