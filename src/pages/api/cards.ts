import cookie from 'cookie'
export default (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("cards", JSON.stringify(req.body.cards), {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 2600000,
      sameSite: "strict",
      path: "/",
    })
  );
  res.statusCode = 200;
  res.json({ success: true })
}