import React, { useState } from 'react';

function UserInput(props) {
    //const [val, setValue] = useState(1);
    const countChar = (event) => event.target.value;
return(
    [
    <input onChange={(event, id) => event.target.value} />,
    <p> 1 </p>
    ]
     );
}
export default UserInput;