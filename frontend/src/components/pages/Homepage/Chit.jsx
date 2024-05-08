import './Chit.css';

const Chit = ({ chit }) => {
  const dateObj = new Date(chit.time);
  const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' ' + dateObj.toLocaleDateString();
  return (
    <div className="chit-box">
    <div className="chit-header">
      <h4>{chit.user.firstname} {chit.user.lastname}</h4>
      <h5>@{chit.user.username}</h5>
      </div>
      <h3>{chit.content}</h3>
      <h6>{time}</h6>
    </div>
  );
};
export default Chit;
