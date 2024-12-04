import PropTypes from "prop-types"
function UserGreeting(props)
{
    const welcome=<h2 className="welcome-message">Welcome {props.username}</h2>;
    const login=<h2 className="login-prompt">Please login to continue</h2>;

    return (props.isLoggedIn ? welcome:login );
    /*if(props.isLoggedIn)
        {
            return <h2>Welcome {props.username}</h2>
        }
        else
        {
            return <h2>Please login to continue</h2>
        }*/
      
}

UserGreeting.proptypes={
    isLoggedIn:PropTypes.bool,
    username:PropTypes.string
   };
   UserGreeting.defaultProps=
   {
    isLoggedIn:false,
    username:"Guest"
   }

export default UserGreeting