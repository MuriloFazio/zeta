import jwt from "jsonwebtoken";

const JWT_SECRET: jwt.Secret =
  process.env.JWT_SECRET || "sua-chave-secreta-muito-segura";
const JWT_EXPIRE = process.env.JWT_EXPIRE || "7d";

export function signToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRE,
  } as jwt.SignOptions);
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.log(error);
    return null;
  }
}
