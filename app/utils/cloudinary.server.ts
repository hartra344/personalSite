import Cloudinaryim from "cloudinary";
const cloudinary = Cloudinaryim.v2;

cloudinary.config({
  cloud_name: "travisdevsite",
  api_key: "326542766175739",
  api_secret: "6naYowrga2qDlsW0KMPU5WFnwXY",
  secure: true,
});

export { cloudinary };
