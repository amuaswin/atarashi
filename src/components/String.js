import React from 'react'

const String = () => {

  let a = "amuthavel";
  let a1 = ["amu", 108, "aswin", "amu"]
  let a2 = "amu,aswin,108,amu"
  let b = a.toUpperCase();
  let c = "CAPITAL"
  let d = c.toLocaleLowerCase();
  let e = "Amuthavel";
  let f = "Nagarajan";
  let g = e.concat(" " + f);
  let g1 = "  Amu  tha vel      ";
  let g2 = g1.trim();
  let g3 = g1.trimStart();
  let g4 = g1.trimEnd();
  let g5 = "\u2029";
  let g6 = a1.indexOf("aswin");
  let g7 = a1.lastIndexOf("amu");
  let g8 = a2.search(108);
  let h = new Date()

  return (
    <div>
      Upper case: {b}<br></br>
      Lower Case: {d}<br></br>
      Concat    : {g}<br></br>
      trim      : {g2}<br></br>
      Trim Start: {g3}<br></br>
      Trim End  : {g4}<br></br>
      G5        : {g5}<br></br>
      G6        : {g6}<br></br>
      G7        : {g7}<br></br>
      G8        : {g8}<br></br>
      Hour      : {h.getHours()}<br></br>
      Minutes   : {h.getMinutes()} <br></br>
      Secods    : {h.getSeconds()}
      trime  : 

    </div>
  )
}

export default String
