import React from 'react'
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { TextInput } from './TextInput';
import { ButtonMain } from './styles/ButtonMain'



const Container = styled.div`
  // height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: #F9F9F9;
  padding-bottom: 20px;
  @media only screen and (max-width: 700px) {
    flex-direction: column;

  }
`;
const FormContainer = styled.form`

  display: flex;
  width: 80%;

  align-items: center;
  justify-content: center;
  background-color: #F9F9F9;
  @media only screen and (max-width: 700px) {
    flex-direction: column;

  }
`;

const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
  @media only screen and (max-width: 700px) {
    margin: 20px;
  }
`;
const Contact = () => {
const form = useRef();
  const [done, setDone] = useState(false)

const [name, setName] = useState('')
const [subject, setSubject] = useState('')
const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(false)

    emailjs.sendForm(
        "service_i83oaqo",
        "template_ij939mb",
        form.current,
        "vEpHfamcj0V-1LcYD"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
      setName('');
      setEmail('');
      setSubject('');

  }

  return (
    <>


  
      <Container id="contact">

        <Title>
        Request a Demo <br /> Get in Touch
        </Title>
 
        <FormContainer>
        <form ref={form} onSubmit={handleSubmit}>
          <TextInput label="Name" name="user_name" value={name} setValue={setName}/>
          <TextInput label="Subject"name="subject" value={subject} setValue={setSubject} />
          <TextInput label="Email"name="user_email" value={email} setValue={setEmail}/>
          <textarea rows="5" placeholder="type your message here" name="message" />
          {done ? 'sent. thank you!' : <ButtonMain data-progress-text='uploading'>Submit</ButtonMain>}
        </form>
        </FormContainer>
      </Container>
    </>

  )
}

export default Contact