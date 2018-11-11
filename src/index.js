const express = require("express");
const morgan = require("morgan");
// const admin = require("firebase-admin");

const router = require("./api");
const { logger } = require("./utils/logger");
const { errorHandler } = require("./middleware/error-handler");
// const serviceAccount = require("../firebase-credentials.json");


<<<<<<< cab5a2c9c20332af6cb23e837b9cebb740fc365d
const db = admin.firestore();
=======
// // initialize firebase store
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const db = admin.firestore();
>>>>>>> restructuring to allow db import

// Create a new express application instance
const app = express();

// The port the express app will listen on
const port = process.env.PORT || 8081;

logger.info("🤖 Initializing middleware");

app.use(morgan("tiny", { stream: logger.stream }));
app.use("/", router);
app.use(errorHandler);

// Serve the application at the given port
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    logger.info(`🎧 Listening at http://localhost:${port}/`);
  });
}

module.exports = {
<<<<<<< cab5a2c9c20332af6cb23e837b9cebb740fc365d
  app,
  db,
=======
  // test: "got it",
  app
  // db = admin.firestore();
>>>>>>> restructuring to allow db import
};
