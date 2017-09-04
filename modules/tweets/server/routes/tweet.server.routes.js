'use strict';

module.exports = function(app){
    var tweet = require('../controllers/tweet.server.controller');

    app.route('/statuses/update').post(tweet.update);
    app.route('/statuses/me_timeline').get(tweet.me_timeline);
    app.route('/statuses/user_timeline/:username').get(tweet.user_timeline);
};