import express from "express";
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, sub, trend, updateVideo } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";
const router = express.Router();

//Create a video
router.post("/", verifyToken, addVideo);

//Update a video
router.put("/:id", verifyToken, updateVideo);

//Delete a video
router.delete("/:id", verifyToken, deleteVideo);

//Get a video
router.get("/find/:id", getVideo);

//Update views
router.put("/view/:id", addView);

//Get trend video
router.get("/trend", trend);

//Get random video
router.get("/random", random);

//Get subscribed video
router.get("/sub", verifyToken, sub);

//Get video by tags
router.get("/tags", getByTag);

//Get video by title
router.get("/search", search);






export default router;
