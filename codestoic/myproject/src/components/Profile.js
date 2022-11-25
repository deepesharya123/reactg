function Profile(props){
    console.log(props);
    const {name, lastname} = props;
    
    return <div>
        { 
           name==="Henry" ? 
           <h1> Name w/o destructuring of props: {props.name} {props.lastname}</h1>
           :<h1> Name by destructing of props: {name} {lastname}</h1>
        }
        <p>{props.children}</p>
    </div> 
}

export default Profile; 