import React, { ReactElement } from "react";
import { NextPage } from "next";
import Navbar from "@/components/UI/Navbar";
import Footer from "@/components/UI/Footer";
import Body from "@/components/UI/Body";

interface IMainLayout {
    children?: ReactElement | ReactElement[] | string;
}

const MainLayout: NextPage<IMainLayout> = ({ children }): ReactElement => {
    return (
        <main>
            <Navbar />
            {<Body>{children}</Body> ?? <h1>Empty</h1>}
            <Footer />
        </main>
    );
};

export default MainLayout;
