import React, {useState} from "react"

function Login (props){
    return(
        <div>
            <button onclick={()=>props.login()}>Login</button>
        </div>
    )
}

export default Login