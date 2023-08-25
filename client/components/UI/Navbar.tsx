import React from "react";
import styles from "@/styles/Navbar.module.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
    const isLogin = false;

    return (
        <header className={`${styles.header} ${inter.className}`}>
            <div className={styles.header__container}>
                <nav className={styles.header__container__logo}>
                    <img src="#" alt="logo" />
                </nav>
                <span className={styles.header__container__items}>
                <div className={styles.find__field}>
                    <div className={styles.find__input} />
                    <div className={styles.loop}></div>
                </div>
                    {isLogin ? (
                        <>
                            <nav>Profile</nav>
                            <nav>Logout</nav>
                        </>
                    ) : (
                        <>
                            <nav>Login</nav>
                            <nav>Registration</nav>
                        </>
                    )}
                </span>
            </div>
        </header>
    );
};

export default Navbar;
