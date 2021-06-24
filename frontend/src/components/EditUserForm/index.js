import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './EditUser.css'
import { deleteUser } from "../../store/session";
import { useHistory } from "react-router";

function EditUserForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState(sessionUser?.email);
    const [username, setUsername] = useState(sessionUser?.username);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const id = sessionUser?.id

    useEffect(() => {
    }, [dispatch, sessionUser])

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email,
            username,
            password,
            id
        }

        dispatch(sessionActions.updateUser(user))
        history.push('/')

    };

    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(deleteUser(id))
    }

    return (
        <div className='edit-user-div'>
            <h2 id='edit-user-header'>Edit User</h2>
            <form onSubmit={handleSubmit}>
                <ul
                    hidden={!!errors}>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
                    Email
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Username
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Confirm Edit User</button>
            </form>
            <form onSubmit={handleDelete}>
                <button type="submit" id='deleteUserButton' >Delete User</button>
            </form>
        </div>
    );
}

export default EditUserForm;
