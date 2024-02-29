"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const achievements_1 = __importDefault(require("src/controllers/achievements"));
const router = (0, express_1.Router)();
//✔️ ❌
router.get("/achievements" /* RoutesPath.ACHIEVEMENT */, achievements_1.default.findOne); //✔️
exports.default = router;
//# sourceMappingURL=achievement.js.map