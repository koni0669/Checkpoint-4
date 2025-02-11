const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

// Import access to database tables
const tables = require("../../database/tables");

const signin = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided email
    const user = await tables.user.readByUsername(req.body.username);

    if (user === null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(
      user.password,

      req.body.password
    );

    if (verified === true) {
      // Respond with the user in JSON format (but without the hashed password)
      delete user.hashed_password;
      const token = jwt.sign(
        {
          sub: user.id,
        },
        process.env.APP_SECRET,
        {
          expiresIn: "1h",
        }
      );
      res
        .cookie("access_token", token, {
          httpOnly: true, // Prevents access to client-side cookies (eg: via Javascript)
          sameSite: "Lax", // The Lax variant adds an exception for sending the cookie in case the request does not come from the original site
          secure: process.env.NODE_ENV === "production", // Allows you to prevent a cookie from being sent to an insecure page (simple http)
          maxAge: 3600000, // Set the lifetime of the cookie. The duration must be the same as the JWT token. Time is in millisecond (1000 = 1s => 3 600 000 = 1h)
        })
        .json({ user, token });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const signout = (_req, res) => {
  res.clearCookie("access_token").sendStatus(200);
};

module.exports = {
  signin,
  signout,
};
