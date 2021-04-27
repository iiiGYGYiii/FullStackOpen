import React from 'react';
import './Notification.styles.css';

const Notification = ({ message}) => (
    <div className={`message ${message.isBad ? 'bad' : 'good'}`}>
        <h2>{message.text}</h2>
    </div>
);

export default Notification;
