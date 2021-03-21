import React from 'react';
import styles from './Header.module.css';
import Searchbar from './Searchbar/Searchbar';
import { ReactComponent as Logo} from '../../assets/images/logo_white.svg'
import Account from './Account/Account';

function Header(){
    return (
        <header className={`${styles.header} d-flex justify-content-between align-items-center`}>
            <Logo className="float-left " />
            <Searchbar className=""/>
            <Account className="float-right" />
        </header>
    );
}

export default Header;