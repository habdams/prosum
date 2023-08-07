import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { SignupFormData } from "../api";
import { useSignup } from "../hooks/useSignup";

import styles from "../styles/Access.module.css";

export default function Signup() {
  const signupMutation = useSignup();
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  const onSubmit = handleSubmit(async () => {
    const data = getValues();
    try {
      await signupMutation.mutateAsync(data);
    } catch (error) {
      console.log(error);
    }
    console.log(data);
  });

  return (
    <section className={styles.access}>
      <section className={styles.form}>
        <section>
          <h1 className={styles.heading}>Signup</h1>
          <section>
            {signupMutation.isError && <p>{signupMutation.error.message}</p>}
          </section>
        </section>
        <form onSubmit={onSubmit}>
          <label htmlFor="username">Username</label>
          <input {...register("username")} />

          <label htmlFor="password">Password</label>
          <input {...register("password")} type="password" />

          <button className={styles.button}>Signup with username</button>
        </form>

        <section className={styles.option}>
          <p>Have an account?</p>
          <Link href={"/login"}>Login</Link>
        </section>
      </section>

      <section className={styles.image}>
        <section className={styles.sideImage}></section>
      </section>
    </section>
  );
}
