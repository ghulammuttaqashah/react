function ProfilePicture()
{
    const imageUrl="./src/assets/profile.png";
    const handleClick=(e)=>e.target.style.display="none";
    return (
        <img src={imageUrl} alt="" onClick={(e)=>handleClick(e)} />
    );
}
export default ProfilePicture