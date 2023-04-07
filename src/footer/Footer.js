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

                <p style={{marginBottom:0}}>&copy; All right reserved || {(new Date()).getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer;