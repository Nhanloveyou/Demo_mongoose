const mongoose = require('mongoose')
const Courses = require('./models/courses')


//Connect Mongoose
const url = 'mongodb://localhost:27017/Mongoose_demo';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log('Connect Successfully');
//Tạo một cơ sở dữ liệu
    var newCourse = Courses({
        name: 'Mongoosejs tutorial',
        description: 'Học xong bạn có thể làm việc với CSDL dễ dàng',
        videoID: 'Adavdkajfls',
        level: 'easy',
        image: 'https://i.redd.it/2ff5574oso141.jpg'
    });
// Lưu lại vào db
    newCourse.save()
        .then((nhan) => {
            //In ra document vừa lưu
            console.log(nhan);

            return Courses.find({}).exec();
        })
        .then((courses) => {
            //in ra tất cả document trong tài liệu
            console.log(courses);
            //Thực hiện xóa tất cả
            return Courses.deleteMany({});
        })
        .then(() => {
            //Đóng kết nối đến DB
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        })
})
