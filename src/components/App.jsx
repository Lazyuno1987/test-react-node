import ContactForm from './ContactForm/ContactForm';
import { Routes, Route } from 'react-router-dom';

export default function App() {

  return (
    <>
    <Routes>
        <Route
          path="test-react-node"
          element={ <ContactForm />}
        />
      </Routes>
    </>
  );
}
