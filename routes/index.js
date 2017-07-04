module.exports = function (User) {

    this.get = function(req, res, next) {
        User.findAll({}).then(function (data) {
            return res.send(data);
        })
        .catch(function(err){
            return res.send(err);
        });
    }

    this.post = function(req, res, next) {
        res.send('saved some Data');
    }

    this.put = function(req, res, next) {
        res.send('made changes to some Data');
    }

    this.del = function(req, res, next) {
        res.send('Data deleted');
    }

    return this;

}