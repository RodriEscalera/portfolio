/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { FC, useRef, useState } from "react";
import style from "./Contact.module.css";
import { FiPhone } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import Button from "@/commons/Button/Button";
import { SendEmail } from "@/services/SendEmail";
import { ToastContainer, toast } from "react-toastify";

interface FormInputs {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const Contact: FC = () => {
  return (
    <>
      <ToastContainer />
      <div id="contact" className={style["container"]}>
        <div className={style["info-container"]}>
          <ContactInfo />
          <FormContainer />
        </div>
      </div>
      <div className="h-[10rem]"></div>
    </>
  );
};

const ContactInfo: FC = () => {
  return (
    <div className={style["contact-me-container"]}>
      <div className={style["contact-keeper"]}>
        <h1 className={style["contact-me-text"]}>Contactame</h1>
        <hr className={style["hr"]} />
        <div className="flex mt-[1rem] items-center">
          <FiPhone />
          <p className="ml-[0.6rem]">+54 3878344531</p>
        </div>
        <div className="flex mt-[0.5rem] items-center">
          <CiMail />
          <p className="ml-[0.6rem]">roescal347@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

const FormContainer: FC = () => {
  const [formInputs, setFormInputs] = useState<FormInputs>({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const form = useRef<HTMLFormElement>(null);

  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setFormInputs((prevState: FormInputs) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  const emptyInputs = (): void => {
    setFormInputs({
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await SendEmail(form);
      emptyInputs();
      toast.success("Correo enviado!", {
        position: "top-center",
      });
    } catch (error: unknown) {
      toast.error("No se pudo enviar el correo.", {
        position: "top-center",
      });
    }
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      className={style["form-container-container"]}
    >
      <div className={style["input-container"]}>
        <p>Nombre Completo *</p>
        <input
          value={formInputs.fullName}
          onChange={handleInputChange}
          name="user_name"
          required
          id="fullName"
          className={style["input"]}
          type="text"
        />
      </div>
      <div className={style["email-and-phone"]}>
        <div className={style["short-input-container"]}>
          <p>Email *</p>
          <input
            value={formInputs.email}
            onChange={handleInputChange}
            name="user_email"
            required
            id="email"
            className={style["short-input"]}
            type="email"
          />
        </div>
        <div className="w-[2rem]"></div>
        <div className={style["short-input-container"]}>
          <p>Numero de Teléfono</p>
          <input
            value={formInputs.phoneNumber}
            onChange={handleInputChange}
            name="user_phone_number"
            id="phoneNumber"
            className={style["short-input"]}
            type="number"
          />
        </div>
      </div>
      <div className={style["input-container"]}>
        <p>Mensaje *</p>
        <textarea
          value={formInputs.message}
          onChange={handleInputChange}
          name="user_message"
          required
          id="message"
          className={style["text-area"]}
        />
      </div>
      <Button type="submit" buttonType="contained" className={style["button"]}>
        Enviar
      </Button>
    </form>
  );
};

export default Contact;
