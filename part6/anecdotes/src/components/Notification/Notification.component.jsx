//MODULES
import { useSelector } from "react-redux";
// STYLES
import "./Notification.styles.css";

const messageSelector = state=>{
  return state.notification;
};

const Notification = () => {
  const message = useSelector(messageSelector); 
  return message&&(
    <div className="anecdote" style={{
      textAlign: "center"
    }}>
      <h3>
        {message}
      </h3>
    </div>
  );
};

export default Notification;
