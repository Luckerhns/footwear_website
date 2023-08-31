import React from "react";
import styles from "@/styles/Navbar.module.scss";
import { Inter } from "next/font/google";
import Image from "next/image";
import SearchInput from "./Search-Input";
import profileIcon from '@/public/main_icons/login.png'
import logo from '@/public/main_icons/logo.png'
import favorites from '@/public/main_icons/favorites.png'
import logout from '@/public/main_icons/logout.png'

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
    const isLogin = false;

    return (
        <header className={`${styles.header} ${inter.className}`}>
            <div className={styles.header__container}>
                <nav className={styles.header__container__logo}>
                    <Image alt="dasda" src={logo} className={styles.logo} />
                </nav>
                <span className={styles.header__container__items}>
                <div className={styles.find__field}>
                    <SearchInput onClick={() => {}} />
                </div>
                    {isLogin ? (
                        <>
                            <nav><Image alt="dasda" src={favorites} width={25} className={styles.profile__icon} /></nav>
                            <nav><Image alt="dasda" src={logout} width={25} className={styles.profile__icon} /></nav>
                            <nav><Image alt="dasda" src={profileIcon} width={25} className={styles.profile__icon} /></nav>
                        </>
                    ) : (
                        <>
                            <nav><Image alt="dasda" src={favorites} width={25} className={styles.profile__icon} /></nav>
                            <nav><Image alt="dasda" src={profileIcon} width={25} className={styles.profile__icon} /></nav>
                        </>
                    )}
                </span>
            </div>
        </header>
    );
};

export default Navbar;
