import React from "react";

export const AuthContex = React.createContext();

const AuthContexProvider = ({ children }) => {

    const [isAuth, setIsAuth] = React.useState(false);
    const [authUser, setAuthUser] = React.useState({});

    React.useEffect(() => {
        const token = localStorage.getItem("tk");
        if (token) {
            setIsAuth(true);
            // hacer persistir el auth
            
        }
    }, []);

    return (
        <AuthContex.Provider value={{ isAuth, setIsAuth, authUser, setAuthUser}}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthContexProvider;
