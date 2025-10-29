import React from 'react';
import Container from './container';
import Image from 'next/image';
import Link from 'next/link';

const Header:React.FC = () => {
  return (
    <header className='l-header'>
        <Container className='container-header'>
          <div className='b-header'>
            <div className='header__wrapper'>
              <Link href='/' className='header__logo'>
                <Image src='/apple-logo.svg' alt='Logo' width={14} height={44}/>
              </Link>
              <div className='header__list'>
                <Link href='/store'>Store</Link>
                <Link href='/mac'>Mac</Link>
                <Link href='/ipad'>iPad</Link>
                <Link href='/iphone'>iPhone</Link>
                <Link href='/watch'>Watch</Link>
                <Link href='/vision'>Vision</Link>
                <Link href='/airpods'>AirPods</Link>
                <Link href='/home'>TV & Home</Link>
                <Link href='/entertainment'>Entertainment</Link>
                <Link href='/accessories'>Accessories</Link>
                <Link href='/support'>Support</Link>
              </div>
              <div className='header__btns'>
                <Image src='/search.svg' alt='Search' width={15} height={44}/>
                <Image src='/cart.svg' alt='Cart' width={14} height={44} />
              </div>
            </div>
          </div>
        </Container>
    </header>
  )
}

export default Header;