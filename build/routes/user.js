"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("src/controllers/User"));
const router = (0, express_1.Router)();
//✔️ ❌
router.get("/users" /* RoutesPath.USER */, User_1.default.getAll); //✔️
exports.default = router;
//# sourceMappingURL=user.js.map