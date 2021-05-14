import PropTypes from "prop-types";

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

InputForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default InputForm;
