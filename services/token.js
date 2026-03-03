import jwt from 'jsonwebtoken'

const generateJWTToken = userId => {
  const accessToken = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '1d'})
  return accessToken

}
export {generateJWTToken}