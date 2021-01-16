import React, {useState} from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        message: ""
    });
    
    const InputEvent = (event) => {
        const {name, value} = event.target;
    
        setData((preVal) =>{
            return{
                ...preVal,
                [name]: value,
            }
        });
    }
    
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${data.fullname}. My Phone number is ${data.phone}. My Email Id is ${data.email}. And here it is what i want to say that ${data.message}`)
    }

    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact-div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                <div class="form-group">
                    <label>Full Name</label>
                    <input
                    type="text"
                    placeholder="Enter your Name"
                    class="form-control"
                    id="fullname"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    />
                </div>

                <div class="form-group">
                    <label>Phone</label>
                    <input
                    type="number"
                    placeholder="Mobile Number"
                    class="form-control"
                    id="phoneNumber"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    />
                </div>

                <div class="form-group">
                    <label>Email Address</label>
                    <input
                    type="email"
                    placeholder="Enter your Email Address"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div class="form-group mb-3">
                    <label>Message</label>
                    <textarea
                    class="form-control"
                    placeholder="Enter your Message..."
                    id="emessage"
                    rows="3"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                    ></textarea>
                </div>
                
                <button type="submit" class="btn btn-outline-primary mb-5">Submit</button>
                </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Contact;