import multer from "multer";

const storage = multer.diskStorage({
    dest: "uploads/",
});

const upload = multer({ storage });

export default upload;