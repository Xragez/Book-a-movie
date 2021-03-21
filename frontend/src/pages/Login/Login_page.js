import React from 'react';
import styles from './Login_page.module.css';

export default function Login() {
    return (
        <div className={styles.backgroundContainer}>
            <div className="container d-flex flex-row p-4">
                <div className={`${styles.pictureContainer} container`}>
                </div>
                <div className={`${styles.formContainer} container`}>
                    <div className={styles.logo}>
                    </div>
                    <div className={styles.formLogin}>
                        <h2>Sign in!</h2>
                        <div className="loginForm">
                            <input className="form-control"></input>
                            <input className="form-control"></input>
                            <button className="btn btn-primary pl-5 pr-5">Login</button>
                        </div>
                        <div className={`${styles.loginFooter} d-flex flex-row`}>
                            <h3 className="p-2">Not a member?</h3>
                            <a className="p-2">Sing up.</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        )
}