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
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const user_1 = __importDefault(require("src/routes/user"));
const achievement_1 = __importDefault(require("src/routes/achievement"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
mongoose_1.default.connect(process.env.MONGODB_URI).catch(error => {
    console.error('Error connecting to MongoDB:', error.message);
});
app.use('/', [user_1.default, achievement_1.default]);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        app.listen(port, () => console.log(`Server started on PORT = ${port}`));
    }
    catch (e) {
        console.log(e);
    }
});
start();
//# sourceMappingURL=index.js.map