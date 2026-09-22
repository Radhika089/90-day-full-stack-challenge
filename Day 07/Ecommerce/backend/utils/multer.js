import multer from "multer";
import crypto from "crypto";

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    const uniqueName = crypto.randomBytes(16).toString("hex");
    cb(null, `${uniqueName}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
});

export default upload;
