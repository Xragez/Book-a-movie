import React from 'react';
import styles from './Account.module.css';

function Account(){
    return (
        <div className={`${styles.account}`}>
            <a className="btn btn-dark">Sing in</a>
        </div>
    );
}

export default Account;