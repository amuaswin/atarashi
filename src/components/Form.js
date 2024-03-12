// import { useState } from "react";
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import './Form.css'


// function MyForm() {
//   const [name, setName] = useState("");
//   const [checked, isChecked] = useState({
//     checkbox1:false,
//     checkbox2:false,
//     checkbox3:false
//   })
//   const [check, ischeck] = useState(false)
  

//   const handleCheckbox1 = () => {
//     ischeck(!check)
//   }

//   const handleCheckbox = (checkbox) => {
//     isChecked( check => ({...check,[checkbox.checkboxName]:!check[checkbox.checkboxName]}))

//     // setChecked(prevState => ({
//     //   ...prevState,
//     //   [checkbox.checkboxName]: !prevState[checkbox.checkboxName]
//     // }));
//   }


//   return (
//     <div className="f">

//     <form>

//       <select className="s">
//         <option value="Mr">Mr</option>
//         <option value="Mrs" selected>Mrs</option>
//         <option value="Miss">Miss</option>
//       </select>

//       <label className="l">Enter your name :<input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
//       <br></br>

//       <label className="l2">Gender : </label>
//       <input type="radio" name="gender" id="male" ></input>
//       <label >Male</label>
//       <input type="radio" name="gender" id="female"></input>
//       <label>Female</label>
//       <br></br>

//       <fieldset className="fd">
//         <label>Languages: </label>
//           <input type="checkbox" id="Tamil" 
//           checked= {checkbox.checkbox1}
//           onChange={handleCheckbox(checkbox1)}/>
//           <label>Tamil</label>

//           <input type="checkbox" id="English" />
//           <label>English</label>

//           <input type="checkbox" id="Japanese" />
//           <label>Japanese</label>


//       </fieldset>



//     </form>


//     </div>
//   )

// }


// export default MyForm;




