const passport = require("passport");

exports.isAuth = (req, res, done) => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWVjYTRiMzUwMThkNGZjOTI1M2I3NSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4OTE3NjY5NX0.TV0qtm3jaNkv5QU5A88ZREDCAvqHkD2vDgReBv5IgFY";
  return token;
};
