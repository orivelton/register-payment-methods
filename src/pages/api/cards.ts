import cookie from 'cookie'
import { Card } from '../../interfaces'

type reqType = { body: { cards: [Card] } }
type resType = { setHeader: (arg0: string, arg1: string) => void; statusCode: number; json: (arg0: { success: boolean; }) => void; }

export default ( req: reqType, res: resType) => {
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
