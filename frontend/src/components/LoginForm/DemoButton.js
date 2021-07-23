import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function DemoButton() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("demo@user.io");
    const [password, setPassword] = useState("password");
    const [errors, setErrors] = useState([]);

    const handleDemo = (e) => {
        e.preventDefault();

        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <>
            <form onSubmit={handleDemo}>
                <button type="submit">Demo User</button>
            </form>
        </>
    );
}

export default DemoButton;
