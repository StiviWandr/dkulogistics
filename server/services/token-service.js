import jwt from "jsonwebtoken"
import Token from "../models/Token.js"
import * as dotenv from "dotenv"
dotenv.config()
class TokenService{
    generateToken (payload){
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: "15s"})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "30s"})
        return{
            accessToken,
            refreshToken
        }
    }
    validateAccessToken(token){
        try{
            const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
            return userData
        }catch(e){
            return null;
        }
    }
    validateRefreshToken(token){
        try{
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
            return userData
        }catch(e){
            return null;
        }
    }


    async saveToken(userId, refreshToken){
        const tokenData = await Token.findOne({user: userId})
        if (tokenData){
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }

        const token = await Token.create({user: userId, refreshToken})
        return token;
    }
    async removeToken(refreshToken){
        const tokenData = await Token.deleteOne({refreshToken});
        return tokenData;
    }
    async findToken(refreshToken){
        const tokenData = await Token.findOne({refreshToken});
        return tokenData;
    }

}
const tokenService = new TokenService();

export default tokenService;