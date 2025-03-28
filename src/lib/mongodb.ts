import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

export const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection.asPromise();
    }

    await mongoose.connect(MONGODB_URI);
    console.log("✅ Conectado ao MongoDB Atlas!");
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
  }
};
