import "./ProfileBadge.css";
import profile from "../../assets/images/profile.png";

export default function ProfileBadge() {
  return (
    <div className="profile-badge-wrapper">
      <div className="profile-badge">
        <img
          src={profile}   // <-- fixed syntax: wrapped in {}
          alt="Creator"
          className="profile-img"
        />
        <span className="profile-name">Sabir Insights</span>
      </div>
    </div>
  );
}
