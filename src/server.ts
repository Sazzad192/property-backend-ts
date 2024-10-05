import mongoose from "mongoose";
import app from "./app";

const PORT = process.env.PORT || 5000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("Db connected well");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
    console.log("DB not connected");
  }
}

main();