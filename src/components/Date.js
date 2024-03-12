import React from 'react'

const ArrayDate = () => {
    const d = new Date();
    const m = new Date();
    const valentines = new Date("2024-02-14");
    const day = valentines.getDay();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = valentines.getMonth();
    const monthNames = ["January", "February", "March" /* , … */];
    // const ima = Date.now();




    return (
        <div>
            Date/Month/Year : {d.toLocaleString()}<br></br>
            Month :{d.getMonth()}<br></br>
            Year  :{d.getFullYear()}<br></br>
            Birthday :{d.getDate()}<br></br>
            getsu :{m.getMonth()}<br></br>
            nichi :{d.getDay()}<br></br>
            Day :{valentines.getDay()}<br></br>
            Name of the Day :{dayNames[day]}<br></br>
            Gatsu :{valentines.getMonth()}<br></br>
            Gatsu namae :{monthNames[month]}<br></br>
            {/* op :{ima.Date.now()} */}

        </div>
    )
}

export default ArrayDate
