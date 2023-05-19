const PORT = process.env.PORT;

// allowed origins
const allowedOrigins = [
  `http://127.0.0.1:${PORT}`,
  `http://localhost:${PORT}`,
  `localhost:${PORT}`,
  `http://localhost:5500`,
  `localhost:7000`,
  "localhost:3000",
  "http://127.0.0.1:5500/*",
  "http://localhost:5500",
  "http://127.0.0.1:5500",
  "null",
];

// Allow Credentials for allowed origins
const credentials = (req, res, next) => {
  const origin = req.headers.host;
  if (typeof origin == "string") {
    if (allowedOrigins.includes(origin)) {
      res.header("Access-Control-Allow-Credentials", "true");
    }
    next();
  }
};

// allow only specific origins
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = { credentials, corsOptions, allowedOrigins };
