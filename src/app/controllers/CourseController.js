const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose'); 

class CourseController {
    // [GET] /
    // GET /search
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
        .then((course) => {
            res.render('courses/detail', {
                course : mongooseToObject(course)
            });
        })
        .catch(next);

        // res.send('Course Detail ' + req.params.slug);
    }
}
module.exports = new CourseController;