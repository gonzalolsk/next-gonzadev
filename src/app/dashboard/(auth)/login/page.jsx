"use client"
import React, { useEffect } from 'react'
import styles from "./page.module.css";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {

  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('/dashboard');
    }
  }, [session.status]);

  if(session.status === 'loading'){
    return <div>Loading...</div>
  }

  
      const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn("credentials", { email, password });
    }
  return (
    <div className={styles.container}>
    <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} type="text" placeholder="Email" required />
        <input className={styles.input} type="password" placeholder="Password" required />
        <button className={styles.button}>Login</button>
    </form>
        <button onClick={()=>signIn("google")}>Login with Google</button>
    </div>
  )
}

export default Login