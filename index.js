const mongoose = require('mongoose')
const Courses = require('./models/courses')

const url = 'mongodb://localhost:27017/Mongoose_demo';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connect Successfully');
    var newCourse = Courses({
        name: 'Mongoosejs tutorial',
        description: 'Học xong bạn có thể làm việc với CSDL dễ dàng',
        videoID: 'Adavdkajfls',
        level: 'easy',
        image: 'https://i.redd.it/2ff5574oso141.jpg'
    });

    newCourse.save()
        .then((course) => {
            console.log(course);

            return Courses.find({}).exec();
        })
        .then((courses) => {
            console.log(courses);

            return Courses.deleteMany({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        })
})
