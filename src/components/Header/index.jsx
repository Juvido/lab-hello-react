import { Navbar } from "../Navbar";
import { TextBox } from "../TextBox";
import {ButtonAwesome} from "../ButtonAwesome"
import style from "./style.module.css";

export function Header () {
    return <header className={style.headerContainer}>
        <Navbar />
        <TextBox />
        <ButtonAwesome />
    </header>
}