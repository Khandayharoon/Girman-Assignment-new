import express, { Request, Response, Application, NextFunction } from "express";
import cors from "cors";
import { z, ZodError } from "zod";
import { User, connectDB } from "./db";

const PORT = process.env.PORT || 8080;
const app: Application = express();

app.use(express.json());
app.use(cors());
console.log("MONGO_DB_URL:", process.env.MONGO_DB_URL);

connectDB();

const userSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  city: z.string().optional(),
  contact_number: z
    .string()
    .min(10, "Contact number must be at least 10 digits"),
  image_link: z.string().url().optional(),
});

const validate =
  (schema: z.ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          message: "Validation error",
          errors: error.errors,
        });
      } else {
        next(error);
      }
    }
  };

app.get("/", (req: Request, res: Response) => {
  res.send("hi there for try");
});

app.post(
  "/create_user",
  validate(userSchema),
  async (req: Request, res: Response) => {
    try {
      const { first_name, last_name, city, contact_number, image_link } =
        req.body;

      const newUser = await User.create({
        first_name,
        last_name,
        city,
        contact_number,
        image_link,
      });

      res.status(201).json({
        message: "User created successfully",
        user: newUser,
      });
    } catch (error) {
      res.status(500).json({ message: "Error creating user", error });
    }
  }
);

app.get("/user/:username", async (req: Request, res: Response) => {
  try {
    const username = req.params.username;
    console.log("Searching for username:", username);

    const allMatchUser = await User.find({ first_name: username });

    console.log("Found users:", allMatchUser);

    res.status(200).json({
      message: "Find successfully",
      users: allMatchUser,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Error Finding user",
      error: error?.message || "An unknown error occurred",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
