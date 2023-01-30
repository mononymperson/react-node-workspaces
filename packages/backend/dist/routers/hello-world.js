"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongRouter = void 0;
const SongRouter = (router) => {
    router.get('/', (req, res) => {
        try {
            return res.json({
                data: 'hello world!',
                message: 'success',
                status: 200,
            });
        }
        catch (error) {
            return res.status(400).json({
                data: null,
                message: error.message,
                status: 400,
            });
        }
    });
    return router;
};
exports.SongRouter = SongRouter;
