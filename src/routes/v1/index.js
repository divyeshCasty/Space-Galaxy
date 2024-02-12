"use strict";
exports.__esModule = true;
var express_1 = require("express");
var auth_1 = require("./auth");
var auth_2 = require("./space");
var router = (0, express_1.Router)();
router.use('/auth', auth_1["default"]);
router.use('/space', auth_2["default"]);
exports["default"] = router;
