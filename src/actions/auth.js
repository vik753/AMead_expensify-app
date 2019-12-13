import {firebase, googleAuthProvider} from '../firebase/firebase';

const login = (uid) => ({
    type: "LOGIN",
    uid
});

const startLogin = () => {
    // console.log('pushed log in');
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

const logout = () => ({
    type: "LOGOUT",
});

const startLogout = () => {
    // console.log('pushed logout');
    return () => {
        return firebase.auth().signOut();
    };
};

export {startLogin, startLogout, login, logout}