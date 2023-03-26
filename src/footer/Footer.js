import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div>
                    <h3>Contact Us</h3>
                    <p>
                        K K Public School <br />
                        Near Punjab National Bank <br />
                        Shikohabad <br />
                    </p>
                </div>

                <copyright>&copy; All right reserved || {(new Date()).getFullYear()}</copyright>
            </div>
        </div>
    )
}

export default Footer;