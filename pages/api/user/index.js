import post from "../../../controller/user/post";

export default function handler(req, res) {

    const method = req.method;
    if (method === "POST") {
        post(req, res);
    } else {
        res.status(503).json({
            success: false,
            error: "method not allow"
        });
    }
}
