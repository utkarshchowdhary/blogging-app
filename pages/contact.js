import Head from "next/head";

import ContactForm from "../components/contact-form";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
      </Head>
      <ContactForm />
    </>
  );
}
