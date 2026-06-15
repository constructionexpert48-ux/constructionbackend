import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Admin from "./models/admin.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(async () => {

  const hashedPassword = await bcrypt.hash("123456", 10);

  await Admin.deleteMany({});

  const admin = await Admin.create({
    email: "admin@gmail.com",
    password: hashedPassword
  });

  console.log(admin);

  process.exit();
});