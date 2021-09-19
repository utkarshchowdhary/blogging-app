import styles from "../styles/modal.module.css";

export default function Modal(props) {
  return (
    <div className={styles.container}>
      <p>{props.message}</p>
      <button onClick={props.onClose}>Close</button>
    </div>
  );
}
