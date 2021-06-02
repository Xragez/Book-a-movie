import React from 'react';
import styles from './Account.module.css';

function Account(){
    return (
        <div className={`${styles.account}`}>
            <a href="/login" className="btn btn-dark mr-3">Sign in</a>
        </div>
    );
}

export default Account;