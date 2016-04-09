function list(req, res) {
    res.send("respond with a resource");
}
exports.list = list;
;
function game(req, res) {
    res.render('game', {
        title: 'Dx Ball!'
    });
}
exports.game = game;
//# sourceMappingURL=user.js.map