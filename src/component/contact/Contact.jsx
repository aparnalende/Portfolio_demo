import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessage3Line } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fszsdkd",
        "template_sn7e2pk",
        form.current,
        "FRDcU9bJa7RO7BJln"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option__icon" />
            <h4>Email</h4>
            <h5>aparna@yopmail.com</h5>
            <a href="mailto:aparna@yopmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessage3Line className="contact__option__icon" />
            <h4>Message</h4>
            <h5>dummymessanger</h5>
            <a href="https://m.me/" target="_blank">
              Send a message
            </a>
          </article>{" "}
          <article className="contact__option">
            <BsWhatsapp className="contact__option__icon" />
            <h4>What's app</h4>
            <h5>9876543212</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+1234567890"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name=""
            id=""
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
