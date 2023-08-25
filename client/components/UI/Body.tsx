import React, {
    PropsWithChildren,
    ReactElement,
} from "react";
import styles from "@/styles/Body.module.scss";

const Body = ({ children }: PropsWithChildren): ReactElement => {
    return <div className={styles.body}>{children}</div>;
};

export default Body;
