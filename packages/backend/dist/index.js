"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const hello_world_1 = require("./routers/hello-world");
require('dotenv').config();
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.use((0, cors_1.default)());
app.use('/hello-world', (0, hello_world_1.SongRouter)(router));
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
});
