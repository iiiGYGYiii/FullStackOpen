// MODULES
import { useDispatch } from "react-redux";
import { changeFilter } from "../../reducers/filter/filterSlice";
// STYLES
import "./Filter.styles.css";

const Filter = () =>{
  const dispatch = useDispatch();
  const handleChange = (e) =>{
    dispatch(changeFilter(e.target.value));
  }
  return (<div className="anecdote filter">
    <h3>Filter:</h3>
    <input type="text" onChange={handleChange} />
  </div>)
};

export default Filter;
