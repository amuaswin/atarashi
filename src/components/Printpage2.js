import React from 'react'

function page() {
    const add = () => {

    /*Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
*/


        window.print();


    }
     /*
    Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
*/
     
    return (

        <div>
            <label>
                このページを印刷して
                <button onClick={add}>click </button>
            </label>
        </div>

    )
}

export default page
