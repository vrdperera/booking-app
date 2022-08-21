import jwt from 'jsonwebtoken';
import createError from './error.js';

export function veryfyToken(req, res, next) {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, 'You are not authenticated!'));
  }

  jwt.verify(token, process.env.JWT_SIGNATURE, (err, user) => {
    if (err) return next(createError(403, 'Token is not valid!'));
    req.user = user;
  });
  next();
}

export function veryfyUser(req, res, next) {
  const cbNext = () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, 'You are not authorized!'));
    }
  };
  veryfyToken(req, res, next, cbNext);
}

export function veryfyAdmin(req, res, next) {
  const cbNext = () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, 'You are not authorized!'));
    }
  };
  veryfyToken(req, res, next, cbNext);
}
