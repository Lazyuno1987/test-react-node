import ContactForm from './ContactForm/ContactForm';
import { Routes, Route } from 'react-router-dom';


// import { useFetchCurrentUserQuery } from 'redux/auth/authAPI';
// import { useSelector } from 'react-redux';



export default function App() {

  return (
    <>
    
       <Routes>
         {/* <Route
          path="test-react-node"
          element={
           
              <RegisterPage />  */}
        <Route
          path="test-react-node"
          element={ <ContactForm />}
        />
      </Routes>
    </>
  );
}
