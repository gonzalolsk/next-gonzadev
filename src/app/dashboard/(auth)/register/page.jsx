"use client"

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Register = () => {

    const [err, setErr] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {
            const res = await fetch("/api/auth/register",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }), 
            })
            res.status === 201 && router.push("/dashboard/login?success=Acount created successfully");
        } catch (err) {
            setErr(true);
        }
    }
    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input className={styles.input} type="text" placeholder="Username" required />
                <input className={styles.input} type="text" placeholder="Email" required />
                <input className={styles.input} type="password" placeholder="Password" required />
                <button className={styles.button}>Register</button>
                <Link className={styles.link} href="dashboard/login">Login with an existing account</Link>
            </form>
            {err && <p>Something went wrong</p>}
        </div>
    )
}
export default Register;