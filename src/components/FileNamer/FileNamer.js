import {useEffect, useState} from 'react';
export default function FileNamer(){
    const [name,setName] = useState('');
    const [alert,setAlert] = useState(false);
    const validate = e => {
        if(/\*/.test(name)){
            e.preventDefault();
            setAlert(true);
            return;
        }
            setAlert(false);

        };
    return(
        <div className="wrapper">
            <div className="preview">
                <h2>Preview: {name}.js</h2>
            </div>
            <form>
            <label>
            <p>Name:</p>
                <input autoComplete="off" name="name" onChange={event =>setName(event.target.value)} />
            </label>
            {alert &&  <div>
                <span role="img" aria-label="allowed">✅</span> Alphanumeric Characters
            <br />
            <span role="img" aria-label="not allowed">⛔️</span> *
            </div>    }
            <div>
                <button onClick={validate}>Save</button>
            </div>
            </form>
        </div>
    )
}