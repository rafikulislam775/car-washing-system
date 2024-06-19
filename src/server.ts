import mongoose from "mongoose";
import app from "./app";
import config from "./config";

// dotenv.config();

async function main() {
  try {
    // connect to MongoDB atlast path

    await mongoose.connect(config.db_url as string); // as string ami sure eta string asbe

    app.listen(process.env.PORT, () => {
      console.log(` app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
