import { useState } from "react";

const useInput = (validateForm) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateForm(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValid: valueIsValid,
    reset,
  };
};

export default useInput;

// import { useState } from "react";

// const useInput = (validateForm) => {
//   const { enteredValue, setEnteredValue } = useState("");
//   const { isTouched, setIsTouched } = useState(false);

//   const valueIsValid = validateForm(enteredValue);
//   const hasError = !valueIsValid && isTouched;

//   const valueChangeHandler = (event) => {
//     setEnteredValue(event.target.value);
//   };

//   const inputBlurHandler = (event) => {
//     setIsTouched(true);
//   };

//   const reset = () => {
//     setEnteredValue("");
//     setIsTouched(false);
//   };

//   return {
//     value: enteredValue,
//     hasError,
//     isValid: valueIsValid,
//     inputBlurHandler,
//     reset,
//     valueChangeHandler,
//   };
// };

// export default useInput;
