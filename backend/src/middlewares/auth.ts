import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';


declare global {
  namespace Express {
    interface Request {
      user?: { userId: string };
    }
  }
}

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(StatusCodes.FORBIDDEN).json({ message: "You are not authenticated" });
  }

  const token = authHeader.split(' ')[1];

  if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET is not defined.');
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Server configuration error." });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET) as jwt.JwtPayload;

    if (!payload.userId) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ message: "Invalid token payload." });
    }

   
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.UNAUTHORIZED).json({ message: "Invalid or expired token." });
  }
};

export default authMiddleware;
