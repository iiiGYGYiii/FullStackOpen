// MODULES
import { connect } from "react-redux";
import { changeFilter } from "../../reducers/filter/filterSlice";
// STYLES
import "./Filter.styles.css";

const Filter = ({ dispatchChange }) =>{
  const handleChange = (e) =>{
    dispatchChange(e.target.value);
  }
  return (<div className="anecdote filter">
    <h3>Filter:</h3>
    <input type="text" onChange={handleChange} />
  </div>)
};

const mapDispatchToProps = {
  dispatchChange: changeFilter
};

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);

export default ConnectedFilter;
