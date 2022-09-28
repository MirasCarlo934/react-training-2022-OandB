import {useRef} from "react";

function FormSample() {

  const txtLastname = useRef();
  const txtFirstname = useRef();
  const txtEmail = useRef();

  function saveDataToSever(data) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    fetch('https://reqres.in/api/posts', requestOptions)
      .then(response => response.json())
      .then(function(data) {
        console.log(data);
      }).catch(function(data) {
       console.error(data);
    });
  }

  function submit(e) {
    e.preventDefault();
    let errorArr = [];

    const data = {
      firstname: txtFirstname.current.value,
      lastname: txtLastname.current.value,
      email: txtEmail.current.value
    }

    for (let propKey in data) {
      if (data[propKey] === '') {
        errorArr.push(`${propKey} field is empty!`);
      }
    }

    let atSymbolFound = false;
    let i = 0;
    for (; i < data.email.length; i++) {
      const c = data.email.charAt(i);
      if (c === '@') {
        if (!atSymbolFound) {
          atSymbolFound = true;
        } else {
          errorArr.push('email has more than 1 \'@\' symbol!');
        }
      }
    }
    if (!atSymbolFound) {
      errorArr.push('email does not contain an \'@\' symbol!')
    }
    if (data.email.length > 100) {
      errorArr.push('email must not exceed 100 characters!')
    }

    console.log(data);
    if (errorArr.length > 0) {
      errorArr.forEach(error => console.log(error));
    } else {
      // api call to submit to an endpoint
      saveDataToSever(data);
    }

    /**
     * 1. Check if all the fields have been filled up
     * 2. Check if the email is proper
     *    2.1 Only 1 @ symbol on the email
     *    2.2 Restrict the length to 100 chars
     *
     *    If there are errors,
     *    - Create an error array with the component
     *    - push the error (text)  to the array
     *    - console.log() the contents of all the array
     *
     * */
  }

  return(
    <form onSubmit={submit}>
      <div className="form-group" >
        <input type="text"
               ref={txtFirstname}
               placeholder="First name"
               className="form-control"/>
        <input type="text"
               ref={txtLastname}
               placeholder={"Last name"}
               className="form-control" />
        <input type="email"
               ref={txtEmail}
               placeholder={"Email"}
               className="form-control"/>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default FormSample;