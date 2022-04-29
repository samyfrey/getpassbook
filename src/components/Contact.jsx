import React from 'react'
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import { TextInput } from './TextInput';
import { ButtonMain } from './styles/ButtonMain'

const Button = styled.button`
  padding: 15px;
  background-color: #4282FA;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Container = styled.div`
  // height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F9F9F9;
  padding-bottom: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;

  }
`;
const FormContainer = styled.form`
  // height: 100vh;
  display: flex;
  width: 80%;

  align-items: center;
  justify-content: center;
  background-color: #F9F9F9;
  @media only screen and (max-width: 480px) {
    flex-direction: column;

  }
`;

const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
  @media only screen and (max-width: 480px) {
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

// import React from "react";
// import styled from "styled-components";
// // import Map from "../img/map.png";
// // import Phone from "../img/phone.png";
// // import Send from "../img/send.png";

// const Container = styled.div`
//   height: 90%;
//   background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
// `;

// const Wrapper = styled.div`
//   height: 100%;
//   padding: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   @media only screen and (max-width: 480px) {
//     flex-direction: column;
//   }
// `;

// const FormContainer = styled.div`
//   width: 50%;
//   @media only screen and (max-width: 480px) {
//     width: 100%;
//   }
// `;

// const Title = styled.h1`
//   margin: 50px;
//   margin-top: 0;
//   @media only screen and (max-width: 480px) {
//     margin: 20px;
//   }
// `;

// const Form = styled.form`
//   height: 250px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   @media only screen and (max-width: 480px) {
//     flex-direction: column;
//   }
// `;

// const LeftForm = styled.div`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   margin-right: 20px;
//   @media only screen and (max-width: 480px) {
//     height: 50%;
//     margin-right: 0;
//   }
// `;

// const RightForm = styled.div`
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   @media only screen and (max-width: 480px) {
//     height: 50%;
//   }
// `;

// const Input = styled.input`
//   width: 200px;
//   padding: 20px;
//   @media only screen and (max-width: 480px) {
//     padding: 5px;
//   }
// `;

// const TextArea = styled.textarea`
//   width: 200px;
//   height: 60%;
//   padding: 20px;
//   @media only screen and (max-width: 480px) {
//     padding: 5px;
//     margin-top: 20px;
//   }
// `;

// const Button = styled.button`
//   border: none;
//   padding: 15px;
//   background-color: darkblue;
//   color: white;
//   font-size: 20px;
//   border-radius: 10px;
//   margin-top: 20px;
//   cursor: pointer;
//   @media only screen and (max-width: 480px) {
//     padding: 5px;
//     font-size: 14px;
//   }
// `;

// const AddressContainer = styled.div`
//   width: 50%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   @media only screen and (max-width: 480px) {
//     width: 100%;
//     margin-top: 20px;
//   }
// `;

// const AddressItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 50px;
//   @media only screen and (max-width: 480px) {
//     margin-bottom: 20px;
//   }
// `;

// const Icon = styled.img`
//   width: 20px;
//   margin-right: 20px;
//   @media only screen and (max-width: 480px) {
//     width: 15px;
//   }
// `;

// const Text = styled.span`
//   font-size: 20px;
//   margin-right: 15px;
//   @media only screen and (max-width: 480px) {
//     font-size: 14px;
//   }
// `;

// const Contact = () => {
//   return (
//     <Container id="contact">
//       <Wrapper>
//         <FormContainer>
//           <Title>
//             Questions? <br /> Let's Get In Touch
//           </Title>
//           <Form>
//             <LeftForm>
//               <Input placeholder="Your Name" />
//               <Input placeholder="Your Email" />
//               <Input placeholder="Subject" />
//             </LeftForm>
//             <RightForm>
//               <TextArea placeholder="Your Message" />
//               <Button>Send</Button>
//             </RightForm>
//           </Form>
//         </FormContainer>
//         <AddressContainer>
//           <AddressItem>
//             {/* <Icon src={Map} /> */}
//             <Text>123 Park Avenue St., New York, USA</Text>
//           </AddressItem>
//           <AddressItem>
//             {/* <Icon src={Phone} /> */}
//             <Text>+1 631 1234 5678</Text>
//             <Text>+1 326 1234 5678</Text>
//           </AddressItem>
//           <AddressItem>
//             {/* <Icon src={Send} /> */}
//             <Text>contact@lama.dev</Text>
//             <Text>sales@lama.dev</Text>
//           </AddressItem>
//         </AddressContainer>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Contact;
