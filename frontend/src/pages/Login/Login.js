import React from 'react';
import styles from './Login.module.css';
import loginImg from '../../assets/images/login_screen.svg'
import logo from '../../assets/images/logo_black.svg'
import Button from '../../components/fundamental/actions/button/Button';

export default function Login() {
    return (
        <div className={styles.backgroundContainer}>
            <div className={`${styles.loginContainer} container d-flex flex-row p-4`}>
                <div className={`${styles.pictureContainer} container`}>
                    <img 
                        src={loginImg}
                        className="img-fluid" />
                </div>
                <div className={`${styles.formContainer} container flex-column`}>
                    <div className={`${styles.logoContainer}`} >
                        <img 
                            src={logo}
                            className={`${logo} img-fluid `} />
                    </div>
                    <div className={`${styles.formLogin} align-self-end`}>
                        <h2 className="mt-3">Sign in!</h2>
                        <div className="justify-content-center">
                            <input className="form-control mt-5"></input>
                            <input className="form-control mt-3"></input>
                            <div className="d-flex justify-content-center">
                            <Button>Login</Button>
                            </div>
                        </div>
                        <div className={`${styles.loginFooter} d-flex flex-row justify-content-center align-items-center `}>
                            <h4 className="p-2">Not a member?</h4>
                            <a className="p-2">Sing up.</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        )
}