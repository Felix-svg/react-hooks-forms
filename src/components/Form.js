import React, { useState } from "react";

// function Form() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   function handleFirstNameChange(event) {
//     setFirstName(event.target.value);
//     console.log(event.target.value);
//   }

//   function handleLastNameChange(event) {
//     setLastName(event.target.value);
//     console.log(event.target.value);
//   }

//   return (
//     <form>
//       <input type="text" onChange={handleFirstNameChange} value={firstName} />
//       <input type="text" onChange={handleLastNameChange} value={lastName} />
//       <button type="submit">Submit</button>
//     </form>
//   );


// function Form() {
//   const [newsletter, setNewsletter] = useState(false);

//   function handleNewsletterChange(event) {
//     // .checked, not .value!
//     setNewsletter(event.target.checked);
//     console.log(event.target.checked)
//   }

//   return (
//     <form>
//       <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
//       <input
//         type="checkbox"
//         id="newsletter"
//         onChange={handleNewsletterChange}
//         // checked instead of value
//         checked={newsletter}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );

function Form(props) {
  return (
    <form>
      <input
        type="text"
        onChange={props.handleFirstNameChange}
        value={props.firstName}
      />
      <input
        type="text"
        onChange={props.handleLastNameChange}
        value={props.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
