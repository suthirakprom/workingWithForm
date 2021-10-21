import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstname,
    hasError: firstnameInputHasError,
    isValid: firstnameInputIsValid,
    reset: resetFirstameInput,
    inputBlurHandler: firstnameInputBlurHandler,
    valueChangeHandler: firstnameInputChangeHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredLastname,
    hasError: lastnameInputHasError,
    isValid: lastnameInputIsValid,
    reset: resetLastnameInput,
    inputBlurHandler: lastnameInputBlurHandler,
    valueChangeHandler: lastnameInputChangeHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: emailInputIsValid,
    reset: resetEmailInput,
    inputBlurHandler: emailInputBlurHandler,
    valueChangeHandler: emailInputChangeHandler,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (firstnameInputIsValid && lastnameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!emailInputIsValid) {
      return;
    }
    resetEmailInput();
    resetFirstameInput();
    resetLastnameInput();
  };

  const firstnameInputClasses = firstnameInputIsValid
    ? "form-control invalid"
    : "form-control";
  const lastnameInputClasses = firstnameInputIsValid
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = firstnameInputIsValid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={firstnameInputClasses}>
          <label htmlFor="firstname">First Name</label>
          <input
            onChange={firstnameInputChangeHandler}
            onBlur={firstnameInputBlurHandler}
            type="text"
            id="name"
            value={enteredFirstname}
          />
          {firstnameInputHasError && (
            <p className="error-text">Please provide your firstname</p>
          )}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor="lastname">Last Name</label>
          <input
            onBlur={lastnameInputBlurHandler}
            onChange={lastnameInputChangeHandler}
            type="text"
            id="name"
            value={enteredLastname}
          />
          {lastnameInputHasError && (
            <p className="error-text">Please provide your lastname</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          type="email"
          id="email"
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Email is invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
