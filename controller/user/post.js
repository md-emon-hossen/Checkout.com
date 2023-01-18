

export default async function handler(req, res) {

    const { fristName, lastName, email, country, pass, conpass } = req.body;







    res.status(200).json({
        success: true,
        messege: "User Sign Up Successfully",
        data: otp
    });
}