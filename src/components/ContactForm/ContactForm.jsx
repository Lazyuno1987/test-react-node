import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, Carta, Svgbidpink, Title, Svgmiddle, Svgsmall, Textarea,  Label, Input, Button, Container } from './ContactForm.styled';
// import { useSelector, useDispatch } from 'react-redux';
// import { addContact, getContacts } from '../../redux/contacts/contactSlice';
 import {
   useAddContactMutation
} from 'redux/contacts/contactSlice';
// import { Filter } from 'components/Filter/Filter';
// import { ContactList } from 'components/ContactList/ContactList';
import svg from '../Icons/yellov.svg'
import svgmid from '../Icons/yellovbig.svg'
import pincbig from '../Icons/pinkbig.svg'
import carta from '../Icons/carta.svg'
// import flower from '../Icons/Vectorflow.svg'

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  //  const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);
  const [createContact] = useAddContactMutation();
  // const { data } = useGetContactsQuery();
  const onSubmitForm = async ({ name, email, message }) => {
    const newContact = {id: nanoid(), name, email, message };
    // console.log(data)
     return createContact(newContact);
  //   return dispatch(addContact(newContact));
   };

  function handleInputChange(event) {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        return;
    }
  }

  const reset = () => {
    setName('');
    setEmail('');
    setMessage('')
  };

  const handelSubmit = event => {
    event.preventDefault();
    onSubmitForm({ name, email, message });
    reset();
  };

  return (
    <Container>
        <Svgmiddle src={svgmid} alt="" />
      <Svgsmall  src={svg} alt="" />
     <Svgbidpink src={pincbig} alt="" />
      <Carta src={carta} alt="" />
      {/* <img src={flower} width='214' alt="" /> */}
      <Form onSubmit={handelSubmit}>
         <Title>Reach out to us!</Title>
        <Label id={nanoid()} name="name">
         
         
          <Input
            placeholder='Your name*'
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label id={nanoid()}>
         <Input
            placeholder='Your e-mail*'
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
           
            required
          />
        </Label>
         <Label id={nanoid()}>
         <Textarea
            placeholder='Your message*'
            type="text"
            name="message"
            value={message}
            onChange={handleInputChange}
        
            required
          />
        </Label>

        <Button type="submit">Send message</Button>
      </Form>
      {/* <p>{contacts }</p> */}
   
     </Container>
  );
}
