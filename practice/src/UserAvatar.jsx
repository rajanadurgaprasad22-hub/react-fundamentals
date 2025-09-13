import logo from "../public/download1.jpg"
import "./UserAvatar.css"
function UserAvatar(user){
 const nameStyle={
    color: 'red',
    fontWeight:'bold',
    
    
 }

   return(
    <div className="container">
        <img className="" src={logo}/>
        <p style={nameStyle}>{user.idname}</p>
        <p>Course:{user.course}</p>
        <p>Roll No:{user.rollno}</p>
        <p>Blood Group:{user.bloodgroup}</p>
        <p>DOB:{user.dob}</p>
    </div>
   )
}
export default UserAvatar;
