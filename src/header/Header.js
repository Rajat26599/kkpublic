import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="slider-thumb"></div>
            <header>
                <div className='logo'></div>
                <p>K K PUBLIC <br/> SCHOOL</p>
                <button className='btn btn-primary exploreBtn'>Click to explore</button>
            </header>
        </div>
    )
}

export default Header;