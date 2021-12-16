import Cloudinaryim from "cloudinary";
const cloudinary = Cloudinaryim.v2;

cloudinary.config({
  cloud_name: "travisdevsite",
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true,
});

export { cloudinary };
