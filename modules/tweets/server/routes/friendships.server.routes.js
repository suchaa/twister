'use strict';

module.exports = function(app){
    var friendships = require('../controllers/friendships.server.routes');

    app.route('friendships/show/:username').get(friendships.show);
};