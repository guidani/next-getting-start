import Link from "next/link";
import styles from "../styles/utils.module.css";

export default function Custom404() {
  return (
    <>
      <h1>404 - Page Not Found</h1>{" "}
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </>
  );
}
