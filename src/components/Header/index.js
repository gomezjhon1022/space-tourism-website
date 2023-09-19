import './Header.scss';

function Header () {
  return (
    <header>
      <div className="header__left"></div>
      <div className="header__right">
        <div className='hamburger__icon'></div>
      </div>
    </header>
  )
}

export { Header }