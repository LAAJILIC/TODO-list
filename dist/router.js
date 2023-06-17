"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const controller_1 = require("./controller");
router.route('/').get(controller_1.getAllTasks).post(controller_1.createTask);
router.route('/:id').get(controller_1.getTaskById).put(controller_1.updateTask).delete(controller_1.deleteTask);
exports.default = router;
//# sourceMappingURL=router.js.map