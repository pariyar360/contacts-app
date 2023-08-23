
function User({name}) {
  return (
    <div className="contact">
      <div className="contact__logo">{name[0]}</div>
      <div className="contact__name">{name}</div>
    </div>
  );
}

export default User;