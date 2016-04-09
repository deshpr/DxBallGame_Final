function index(req, res) {
    res.render('index', {
        title: 'This is my tutle',
        recipes: ['Rahul', 'Such', 'Bill', 'Chris']
    });
    //res.render('index', { title: 'Express' });
}
exports.index = index;
;
//# sourceMappingURL=index.js.map