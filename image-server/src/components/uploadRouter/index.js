
import { Router } from 'express';
import multer from 'multer';
import sha256 from 'crypto-js/sha256';

const router = Router();

const filename = (req, file, cb) => {
  cb(null, sha256(file.filename) + file.originalname);
};

const storage = multer.diskStorage({
  destination: './src/uploads/guild/avatar',
  filename,
});

const upload = multer({ storage, });
  
router.post('/guild/avatar', upload.single('avatar'), ( req, res ) => {
  if (!req.file) {
    return res.send({ sucess: false });
  }
  return res.send(req.file.filename).status(200);
})

export default router; 