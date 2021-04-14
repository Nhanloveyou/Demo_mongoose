const express = require('express');
const mongoose = require('mongoose');

const Courses = require('../models/courses');

const courseRouter = express.Router();

courseRouter.use(express.json());

app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

courseRouter.route('/')
.get((req,res,next) => {
    Courses.find({})
    .then((courses) => {
        res.statusCode = 200;
        // res.setHeader('Content-Type', 'application/json');
        res.json(courses);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Courses.create(req.body)
    .then((course) => {
        console.log('Course Created ', course);
        res.statusCode = 200;
        // res.setHeader('Content-Type', 'application/json');
        res.json(course);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT không được thực hiện tại /courses');
})
.delete((req, res, next) => {
    Courses.remove({})
    .then((resp) => {
        res.statusCode = 200;
        // res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

courseRouter.route('/:courseId')
.get((req,res,next) => {
    Courses.findById(req.params.courseId)
    .then((course) => {
        res.statusCode = 200;
        // res.setHeader('Content-Type', 'application/json');
        res.json(course);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /coursees/'+ req.params.courseId);
})
.put((req, res, next) => {
    Courses.findByIdAndUpdate(req.params.courseId, {
        $set: req.body
    }, { new: true })
    .then((course) => {
        res.statusCode = 200;
        // res.setHeader('Content-Type', 'application/json');
        res.json(course);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Courses.findByIdAndRemove(req.params.courseId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = courseRouter;