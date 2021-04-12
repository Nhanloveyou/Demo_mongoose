const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController{
    // [GET]/ 
    index(req, res, next ){
    Course.find({})
        .then(courses => {
            // courses = courses.map(course => course.toObject())
            res.render('home', {
                courses: multipleMongooseToObject(courses)
            });
        })
        .catch(next);
        // .catch(error => next(error));
    }
    //[GET] /search
    show(req, res){
        res.render('search');
    }
}



module.exports = new SiteController;