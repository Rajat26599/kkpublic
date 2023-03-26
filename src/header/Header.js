import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <div class="slider-thumb"></div>
            <header>
                <div className='logo'></div>
                <p>K K PUBLIC <br/> SCHOOL</p>
                <button className='btn btn-primary'>Click to explore</button>
            </header>
        </div>
    )
}

export default Header;