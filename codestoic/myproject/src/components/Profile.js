function Profile(props){
    console.log(props);
    return <div>
        <h1> Name: {props.name} {props.lastname}</h1>
        <p>{props.children}</p>
    </div> 
}

export default Profile; 