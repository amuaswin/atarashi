import React from 'react'

function Ex() {
  const s1 = `Java script is a programming language react`
  const p = /[^a-z]/
  console.log(p.test('Kmnzway87aai@123'));
  console.log(s1);

  return (
    <div>
return : {s1}
    </div>
  )
}

export default Ex

