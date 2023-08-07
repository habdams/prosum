import Link from "next/link";

import styles from '../Navbar/Navbar.module.css';

export function Navbar (){
    return(
    <section className={styles.navbar}>
        
        <Link href={"/login"}>
            Login
        </Link>
        
        <Link href={"/signup"}>
        Signup
        </Link>
        

    </section>
    )
}