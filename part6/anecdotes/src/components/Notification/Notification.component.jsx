//MODULES
import { connect } from "react-redux";
// STYLES
import "./Notification.styles.css";

const messageSelector = state=>{
  return state.notification;
};

const Notification = (props) => {
  const message = props.notification;
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

const mapStateToProps = (state) => {
  return{
    notification: messageSelector(state)
  };
};

const ConnectedNotification = connect(mapStateToProps)(Notification);
export default ConnectedNotification;
