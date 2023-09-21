import './Header.scss';

function Header () {
  return (
    <header>
      <div className="header__left"></div>
      <div className="header__right">
        <div className='hamburger__icon'></div>
        <nav className='header__right--desktop'>
          <ul>
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>DESTINATION</a>
            </li>
            <li>
              <a>CREW</a>
            </li>
            <li>
              <a>TECHNOLOGY</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export { Header }