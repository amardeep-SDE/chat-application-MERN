import jwt from 'jsonwebtoken';

const isAuthenticated = async(req, res, next) => {
  // if (req.isAuthenticated()) {
  //   return next();
  // }
  // res.status(401).send('Unauthorized');
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized", success: false });
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decode);
    
    if (!decode) {
      return res.status(401).json({ message: "Invaild Token", success: false });
    }
    req.id = decode.userId;
    next();
    
  } catch (error) {
    console.log(error);
  }
}
export default isAuthenticated;

// const req = {
//   id:"",
// }
// req.id = "sdlbgnjdfn"