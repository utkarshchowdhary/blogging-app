import { useState } from "react";
import axios from "axios";

import Modal from "./modal";
import Spinner from "./spinner";

import styles from "../styles/contact-form.module.css";

export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [infoMessage, setInfoMessage] = useState("");

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleMessageChange(e) {
        setMessage(e.target.value);
    }

    function handleCloseModal() {
        setInfoMessage("");
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        try {
            const { data } = await axios({
                url: "/api/contact",
                method: "POST",
                data: { email, name, message },
            });
            setInfoMessage(data.message);
        } catch (e) {
            setInfoMessage(e.response.data.error);
        }
        setIsLoading(false);
        setEmail("");
        setName("");
        setMessage("");
    }

    return (
        <>
            {!isLoading && infoMessage && (
                <Modal message={infoMessage} onClose={handleCloseModal} />
            )}
            <section className={styles.contact}>
                {(isLoading || infoMessage) && (
                    <div className={styles.loading}>
                        {isLoading && <Spinner />}
                    </div>
                )}
                <h1>How can I help you?</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.controls}>
                        <div>
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            rows="5"
                            required
                            value={message}
                            onChange={handleMessageChange}
                        />
                    </div>
                    <div className={styles.actions}>
                        <button>Send Message</button>
                    </div>
                </form>
            </section>
        </>
    );
}
