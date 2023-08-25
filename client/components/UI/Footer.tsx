import React from 'react';
import styles from '@/styles/Footer.module.scss'
import { Inter } from 'next/font/google';

const inter = Inter({subsets: ['vietnamese']})

const Footer = () => {
    return (
        <footer className={`${styles.footer} ${inter.className}`}>
            <div>Footer</div>
        </footer>
    );
};

export default Footer;