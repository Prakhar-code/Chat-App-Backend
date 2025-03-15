import jwt from 'jsonwebtoken';

const genereteToken = (userId, res) => {
    const payload = {
        userId
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '7d'
    });
    res.cookie('jwt', token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
        httpOnly: true, // prevents client side javascript from reading the cookie
        sameSite: "strict", // CSRF protection
        secure: process.env.NODE_ENV !== "development",
    });

    return token;

};

export default genereteToken;