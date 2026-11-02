import { useState } from "react";
import '../styels/Form.css'

const Form = () => {
    const [data, updateData] = useState("");

    const changeData = (data) => {
        updateData(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)} className="Form">
            <p>Form's Title</p>
            <section className="Form__name">
                <label htmlFor="firstName">
                    <span>First name:</span>
                    <input type="text" id="firstName" placeholder="firstname" />
                </label>

                <label htmlFor="lastName">
                    <span>Last name:</span>
                    <input type="text" id="lastName" placeholder="lastname" />
                </label>
            </section>

            <section className="Form__email">
                <label htmlFor="emailForm">
                    <span>Email:</span>
                    <input id="emailForm" type="email" placeholder="Phone"/>
                </label>
            </section>

            <section className="Form__phone">
                <label htmlFor="phoneForm">
                    <span>Contact Number:</span>
                    <input type="tel" id="phoneForm" placeholder="Name"/>
                </label>
            </section>           
            <button className="Form__Btn--submit" type="submit">Submit data</button>
        </form>
    )
}

export default Form;