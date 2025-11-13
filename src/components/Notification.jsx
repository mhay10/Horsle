import '../styles/notification.css';

export default function Notification({ message, visible }) {
  return (
    <div className={`notification ${visible ? 'visible' : ''}`}>
      {message}
    </div>
  );
}
