'use strict';

var errorHandler = require('./errors.server.controller');
var mongoose = require('mongoose');
var Following = mongoose.model('Following');
var Follower = mongoose.model('Follower');

/* status */
exports.show = function (req, res, next) {
    var is_following = false;
    var is_followed = false;

    if (req.user) {
        Following.findOne({
            username: req.user.username,
            followings: req.params.username
        }, function (err, following) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            }
            if (following) {
                is_following = true;
            } else {
                is_following = false;
            }

            Follower.findOne({
                username: req.user.username,
                followers: req.params.username
            }, function (err, follower) {
                if (err) {
                    return res.status(400).send({
                        message: errorHandler.getErrorMessage(err)
                    });
                }
                if (follower) {
                    is_followed = true;
                } else {
                    is_followed = false;
                }

                res.json({
                    is_following: is_following,
                    is_followed: is_followed
                });
            });
        });
    } else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
};

/* follow */
exports.follow = function (req, res, next) {
    if (req.user) {
        var username = req.user.username;
        var followUsername = req.body.follow_username;

        Following.findOneAndUpdate(
            { username: username }, //condition
            { $addToSet: { followings: followUsername } }, //add to set
            { upsert: true }, //update or insert collection
            function (err, following) {
                if (err) {
                    return res.status(400).send({
                        message: errorHandler.getErrorMessage(err)
                    });
                }
                Follower.findByIdAndUpdate(
                    { username: followUsername },
                    { $addToSet: { followers: username } },
                    { upsert: true },
                    function (err, following) {
                        if (err) {
                            return res.status(400).send({
                                message: errorHandler.getErrorMessage(err)
                            });
                        }
                        res.json({
                            is_following: true
                        });
                    }
                );
            });
    } else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
};