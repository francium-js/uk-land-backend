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
const UserService_1 = __importDefault(require("src/services/UserService"));
class UserController {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield UserService_1.default.getAll();
            if (!result) {
                res.status(400).send({ message: 'Щось не так... х-х' });
                return;
            }
            return res.status(200).send(result);
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=index.js.map