import React from 'react';
import './Notification.css';

const NotificationBadge = ({ count, effect }) => {
  return (
    <>
      {count > 0 ? (
        <div className={`notification-badge ${effect}`}>
          {count}
        </div>
      ) : null}
    </>
  );
};

export default NotificationBadge;