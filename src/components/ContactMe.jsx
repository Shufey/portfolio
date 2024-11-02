import React from "react";
import ContactInfoCard from "./ContactInfoCard";
import ContactForm from "./ContactForm";
import './contactMe.css'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <div className="text-white">
      <section className="contact-container my-16 mx-0 ">
        <h5 className="text-2xl font-semibold mb-14 md:ml-0 ml-8">Contact Me</h5>
        <div className="contact-content flex gap-12 md:flex-row flex-col-reverse md:mx-0 mx-8 md:mt-0 mt-12">
          <div style={{ flex: 1 }}>
            <ContactInfoCard icon={faEnvelope} text="shafi.insights@gmail.com" />
            <ContactInfoCard icon={faGithub} text="github.com/Shufey" />
          </div>
          <div style={{ flex: 1 }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
