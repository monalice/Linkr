import React,{useState} from 'react';

import Forms from '../components/Forms';

export default function SignIn({setTask}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [pictureUrl, setPictureUrl] = useState('');

    function verifyInputs(){
        if (email === '' || password === '' || username === '' || pictureUrl === '')
            alert("Preencha todos os campos");
    }
    
    return(
        <>
            <Forms>
                <input  type="email" name="email" placeholder='e-mail'
                        onChange={e => setEmail(e.target.value)}
                        value={email} />
                <input  type="password" name="password" placeholder='password'
                        onChange={e => setPassword(e.target.value)}
                        value={password} />
                <input  type="text" name="user" placeholder='username'
                        onChange={e => setUsername(e.target.value)}
                        value={username} />
                <input  type='url' name="picture" placeholder='picture url' 
                        onChange={e => setPictureUrl(e.target.value)}
                        value={pictureUrl} />
                <button onClick={verifyInputs}>Sign Up</button>
            </Forms>
            <p onClick={() => setTask(true)}>Switch back to log in</p>
        </>
    )
}