import Link from "next/link";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";

import { UserData } from "../api";

import styles from "../styles/Access.module.css";
import axios from "axios";

const signIn = () => {};

export default function Login() {
  const {} = useQuery({
    queryKey: ["login"],
    queryFn: signIn,
  });

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSubmit = handleSubmit(async () => {
    const data = getValues();
    try {
      const response = await axios.post(
        "https://prosum-api.onrender.com/signin",
        data
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
      }
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <section className={styles.access}>
      <section className={styles.form}>
        <section>
          <h1 className={styles.heading}>Login</h1>
        </section>

        <form onSubmit={onSubmit}>
          <label htmlFor="username">Username</label>
          <input {...register("username")} />

          <label htmlFor="username">Password</label>
          <input {...register("password")} type="password" />

          <button className={styles.button}>Login</button>
        </form>

        <section className={styles.option}>
          <p>Don't have an account?</p>
          <Link href={"/signup"}>Signup</Link>
        </section>
      </section>

      <section className={styles.image}>
        <section className={styles.sideImage}></section>
      </section>
    </section>
  );
}
