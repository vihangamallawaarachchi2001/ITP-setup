const jwt = require('jsonwebtoken')

const Authenticate = async (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded; 
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            console.info("Token has expired:", error.message);
        } else if (error instanceof jwt.JsonWebTokenError) {
            console.info("Invalid token:", error.message);
        } else if (error instanceof jwt.NotBeforeError) {
            console.info("Token is not active yet:", error.message);
        } else {
            console.info("Authentication error:", error.message);
        }
        return null;
    }
}

module.exports = Authenticate;