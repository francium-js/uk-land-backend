"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AchievementService_1 = __importDefault(require("src/services/AchievementService"));
class AchievementsController {
    static findOne(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userName } = req.query;
            if (!userName) {
                res.status(400).send({ message: 'В URL відсутній параметр для пошуку.' });
                return;
            }
            const result = yield AchievementService_1.default.findOne(String(userName));
            if (!result) {
                res.status(400).send({ message: `Данного гравця не знайдено: ${userName}` });
                return;
            }
            return res.status(200).send(result);
        });
    }
}
exports.default = AchievementsController;
//# sourceMappingURL=index.js.map