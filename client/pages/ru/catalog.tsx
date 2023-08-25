import React from "react";
import styles from "@/styles/Catalog.module.scss";
import MainLayout from "@/layout/MainLayout";
import Window from "@/components/Window";
import ShoesGrid from "@/components/ShoesGrid";

const Catalog = () => {
    return (
        <MainLayout>
            <ShoesGrid />
        </MainLayout>
    );
};

export default Catalog;
