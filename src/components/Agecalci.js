import React, { useState } from 'react'

const Agecalci = () => {
  let [birthDay, setBirthDay] = useState();
  var today = new Date();
  var birthDate = new Date(birthDay);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  let ge = age;

  return (
    <div>

      <input type="date" onChange={(e) => setBirthDay(e.target.value)}></input>

      The Age is:{ge}
    </div>
  )
}

export default Agecalci
