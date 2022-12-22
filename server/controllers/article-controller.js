import userService from "../services/user-service.js";
import {validationResult} from 'express-validator'
import ApiError from "../extensions/app-errors.js";
import articleService from "../services/article-service.js";

class ArticleController {
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