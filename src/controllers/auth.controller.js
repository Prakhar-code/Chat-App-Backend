const signup = (req, res) => {
    res.send("Hello from the signup route");
}


const login = (req, res) => {
    res.send("Hello from the login route");
}


const logout = (req, res) => {
    res.send("Hello from the logout route");
}

export {signup, login, logout};