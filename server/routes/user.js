const User = require("../models/user");
const express = require("express");
const { findOneAndUpdate } = require("../models/user");
const { query } = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const user = await new User(req.body).save();
        res.send(user);
    } catch (error) {
        res.send(error);
    }
})

router.get("/", async (req, res) => {
    try {
        const total = await User.count();
        const page = +req.query.page || 1;
        const limit = +req.query.limit || 5;
        const from = limit * (page - 1) + 1;
        const to = limit * (page - 1) + limit;
        const users = await User.find()
            .limit(limit)
            .skip((page - 1) * limit)
        res.send({
            from: from <= total ? from : null,
            to: to <= total ? to : from > total ? null : total,
            total,
            users
        });
    } catch (error) {
        res.send(error);
    }
})

router.put("/:id", async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ id: req.params.id }, req.body)
        res.send(user)
    } catch (error) {
        res.send(user)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findOneAndDelete(req.params.id)
        if (user) {
            res.send(user)
        } else {
            throw new Error()
        }
    } catch (error) {
        res.send(user)
    }
})
module.exports = router;