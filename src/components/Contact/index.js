import React, { useState } from "react";
import axios from 'axios';
import {
  ContactContainer,
  ContactForm,
  ContactInput,
  ContactTextArea,
  ContactButton,
  ContactError,
  ContactH2,
  Contactlabel
} from "./ContactElements";

const initialState = {
  nombre: "",
  email: "",
  mensaje: "",
};

const Contact = () => {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in state) {
      if (state[key] === "") {
        setError(`El ${key} no puede estar vacio`);
        return;
      }
    }
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/arqueareciclaje@gmail.com", {
        nombre: state.nombre,
        email: state.email,
        mensaje: state.mensaje,
        _subject: 'arqueareciclaje.com'
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    setError("");

    setTimeout(() => {
      alert('El Formulario se envió correctamente');
      setState(initialState);
    }, 2000);
  };

  const handleInput = (e) => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState((prev) => ({ ...prev, [inputName]: value }));
  };
  return (
    <>
      <ContactContainer id="contacto">
        <ContactForm onSubmit={handleSubmit}>
          <ContactH2>Contacto</ContactH2>
          <Contactlabel htmlFor="nombre">Nombre</Contactlabel>
          <ContactInput
            type="text"
            name="nombre"
            value={state.nombre}
            onChange={handleInput}
          ></ContactInput>
          <Contactlabel htmlFor="email">Email</Contactlabel>
          <ContactInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          ></ContactInput>
          <Contactlabel htmlFor="mensaje">Mensaje</Contactlabel>
          <ContactTextArea
            type="text"
            name="mensaje"
            value={state.mensaje}
            onChange={handleInput}
          ></ContactTextArea>
          {error && (
            <ContactError>
              <p>{error}</p>
            </ContactError>
          )}
          <ContactButton type="submit">Enviar</ContactButton>
        </ContactForm>
      </ContactContainer>
    </>
  );
};

export default Contact;
