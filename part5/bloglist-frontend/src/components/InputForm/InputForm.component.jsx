import "./InputForm.style.css";

const InputForm = ({ handleChange, placeHolder, label, ...otherProps }) =>(
  <>
  <label>{label}:</label>
  <input
    className="login-input"
    onChange={handleChange}
    placeholder={placeHolder}
    {...otherProps}
  /></>
);

export default InputForm;
