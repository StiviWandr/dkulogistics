import userService from "../services/user-service.js";
import {validationResult} from 'express-validator'
import ApiError from "../extensions/app-errors.js";
import articleService from "../services/article-service.js";

class ArticleController {
    async registration(req, res, next){
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return next(ApiError.BadRequest("Ошибка при валидации", errors.array()))
            }
            const userData = await userService.registration(req.body);
            res.cookie("refreshToken", userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData)
        }catch(e){
            next(e)
        }
    }
    async uploadArticle(req, res, next){
        try{
            const articleData = req.body;
            const articleFile = req.file.filename;
            const article = await articleService.uploadArticle(articleData, articleFile)
            return res.json(article)
        }catch(e){
            next(e);
        }
    }
    
}

const articleController = new ArticleController;
export default articleController;