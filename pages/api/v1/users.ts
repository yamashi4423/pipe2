import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/seed";

interface PostProps {
  name: string;
  email: string;
  password: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        const users = await prisma.user.findMany();
        res.status(200).json({ users });
      } catch (err) {
        res.status(500).json({ err });
      }
    case "POST":
      try {
        const { name, email, password } = JSON.parse(req.body); // JSON をオブジェクトに変換
        // console.log("name:", name, "email:", email, "password", password);
        const user = await prisma.user.create({
          data: {
            name: name,
            email: email,
            password: password,
          },
        });
        res.status(200).json({ user });
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: "CANT CREATE USER" });
      }
  }
}
