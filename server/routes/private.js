import express from "express";

const router = express.Router();

// Get a random UUID
router.get("/", async (req, res, next) => {
      const uuid = uuid();
      res.status(200).send(uuid);
});
      
export default router;



