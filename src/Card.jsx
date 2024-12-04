import profilePic from "./assets/profile.png";
function Card()
{
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profilepicture"  />
            <h2 className="card-title">Ghulam Muttaqa</h2>
            <p className="card-text">I am stuying bachelor in computer science at Sukkur IBA University. My hobbies are overthinking </p>
        </div>
    );
}
export default Card