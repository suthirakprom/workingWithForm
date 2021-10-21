import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameBlurHandler,
    isValid: enteredNameIsValid,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailOnBlurHandler,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    resetEmailInput();
    resetNameInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasess = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={nameBlurHandler}
          value={enteredName}
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
        />
        {nameInputHasError && (
          <p className="error-text">The input space cannot be empty</p>
        )}
      </div>
      <div className={emailInputClasess}>
        <label htmlFor="email">Your Email</label>
        <input
          onBlur={emailOnBlurHandler}
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          type="email"
          id="email"
        />
        {emailInputHasError && (
          <p className="error-text">The email is invalid</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
