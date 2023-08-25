import React, { useEffect } from "react";
import styles from "@/styles/ShoesGrid.module.scss";

const ShoesGrid = () => {
    useEffect(() => {
        const shoes = document.querySelector(".shoes") as HTMLDivElement;
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; i++) {
            shoes.insertAdjacentHTML('afterbegin',`<div>${'dads'}</div>`)
            }
        }
    }, []);
    return <div className={`${styles.shoes} shoes`}>shoesdsds</div>;
};

export default ShoesGrid;
