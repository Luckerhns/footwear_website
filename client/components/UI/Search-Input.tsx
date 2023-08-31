import LoopIcon from "@/public/main_icons/loop.png";
import Image from "next/image";
import styles from "@/styles/Navbar.module.scss";
import {
    FunctionComponent,
    FunctionComponentElement,
    ReactComponentElement,
    ReactElement,
    useState,
} from "react";
import { ISearchInput } from "@/types/Header";

const SearchInput:FunctionComponent<ISearchInput> = ({onClick}) => {
    const [input, setInput] = useState<string>('')

    return (
        <div className={styles.find__input}>
            <div className={styles.search_input}>
                <input
                    placeholder="Введите название или бренд"
                    value={input}
                    onChange={(e) =>
                        setInput(e.target.value)
                    }
                />
            </div>
            <div className={styles.search_button} onClick={onClick}>
                <Image
                    width={15}
                    alt="none"
                    className={styles.loop_icon}
                    src={LoopIcon}
                />
            </div>
        </div>
    );
};

export default SearchInput;
