import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import React from 'react';

//import { Form } from 'react-bootstrap';
//import MyForm from './components/Form';
//import UseReducer from './components/UseReducer';
//import Register from './components/Loginform/Register';
// import Useapi from './components/Useapi';
// import UseContextHook from './components/UseContextHook';
// import UseE1 from './components/UseE1';
// import Async from './components/Async';
// import Sample from './components/Square';
// import DialogueBox from './components/Printpage'
// import Printpage2 from './components/Printpage2'
// import Object1 from './components/Object1'
// import Array from './components/Array';
// import Array1 from './components/Array1';
// import Multiplication from './components/Multiplication';
// import Learn from './components/Learn';
// import ArrayDate from './components/Date';
// import String from './components/String';
// import Ex from './components/Ex';
// import Agecalci from './components/Agecalci';
// import Calculator from './components/Calculator';
// import Apple from './components/Calculator';
// import UseEffect from './components/useEffect';
// import Calci2 from './components/Calci2'
// import Useex3 from './components/Useex3';
// import Useex2 from './components/Useex2';
// import UseEffect2 from './components/UseEffect2';
// import Register from './components/Loginform/Register'
// import FormValidation from './components/FormValidation';
// import ErrorHandling from './components/ErrorHandling';
// import Error from './components/Error'
// import FormValid2 from './components/FormVaild2' ;
// import DataTables from './components/DataTable';
// import Dtpost from './components/Dtpost';
// import Dts from './components/Dts';
import Dt from './components/Dt';
// import Dtcrud from './components/Dtcrud'
//import DataTables from './components/Dtcrud';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Login from './components/Login';











function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Dt' element={<Dt />}></Route>
        </Routes>

      </Router>
      {/* <Object1/>
      <Sample />
      <Async />
      <DialogueBox />
      <Printpage2 />
      <Array />
      <Array1/>
      <Multiplication/>
      <Learn />
      <ArrayDate/>
      <String/> 
      <Ex />
      <Agecalci/> 
      <Apple/>
      <UseEffect/> 
      <Calci2/> 
      <UseContextHook />
      <Useapi/>
      <UseE1/> */}

      {/* <Useex2/>  */}
      {/* <UseEffect2 /> */}
      {/* <Useex3/> */}

      {/* <MyForm /> */}
      {/* <UseReducer /> */}
      {/* <Register /> */}

      {/* <ErrorHandling />
      <Error/> */}
      {/* <FormValidation /> */}
      {/* <FormValid2/> */}
      {/* <DataTables /> */}
      {/* <Dts/>   */}
      {/* <Dtpost/> */}
      {/* <Dt/> */}
      {/* <Dtcrud/> */}
      {/* <Login /> */}




    </>

  );
}

export default App;
