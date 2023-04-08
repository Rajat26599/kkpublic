import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footerText'>
                    <h2>Contact Us</h2>
                    <p>
                        K K Public School <br />
                        Near Punjab National Bank, <br />
                        Shikohabad -283135, <br />
                        UP (India) <br /><br />
                        <i className="fa fa-phone" style={{color:'#bbb'}}></i>&nbsp;8439978090<br />
                        <i className="fa fa-envelope" style={{color:'#bbb'}}></i>&nbsp;<a href="mailto:kkpublic.skb@gmail.com">kkpublic.skb@gmail.com</a>
                    </p>
                    <br />
                    <p style={{marginBottom:0}}>&copy; All right reserved || {(new Date()).getFullYear()}</p>
                </div>
                <div className='map'>
                    <iframe 
                        title='map'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.596884844336!2d78.58136951491717!3d27.106003783044702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39744a3e020d587f%3A0x3d1e6cb3e41e9f83!2sK%20K%20Bal%20Vidhyalay!5e0!3m2!1sen!2sin!4v1680957489097!5m2!1sen!2sin" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
            
        </div>
    )
}

export default Footer;