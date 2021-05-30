import "./Counter.styles.css";

const Counter = ({ name, value }) => (
  <tr>
    <td> {name} </td>
    <td> {value} </td>
  </tr>
);

export default Counter;
