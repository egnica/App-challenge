import { useState } from "react";
const Form = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState(0);

    const submitHandler = (event) => {
        event.preventDefault();
        if (userName === "" || userAge === 0)
        {
            alert('You left a field blank')
        }else if(userAge < 0){
            alert('Your age can not be less than 0')
        }
        else{
            props.userTansfer({
            name: userName,
            age: userAge
        }) 
        }
        
        setUserName('');
        setUserAge(0);
    }

    return(
        <div style={{display: 'grid',
            placeContent: 'center'}}>
                <br/>
            <form onSubmit = {submitHandler} style={{textAlign:'right'}}>
                <label>Username: </label>
                <input onChange = {event => setUserName(event.target.value)} value = {userName}/>
                <br/>
                <label>Age(Years): </label>
                <input type='number' onChange = {event => setUserAge(event.target.value)} value = {userAge}/>
                <br/>
                <button>Add User</button>
            </form>
        </div>
    )
}
export default Form;