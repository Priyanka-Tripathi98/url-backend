const URL = require("../models/urlModels");
const generateCode = require("../middleware/generateCode");

// ✅ Create short URL
exports.createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;

    if (!originalUrl){
      return res.status(400).json({ message: "URL is required" });
    }

    const shortCode = generateCode();
 const shortUrl = `https://url-backend-cijf.onrender.com/url/${shortCode}`;

    await URL.create({
      originalUrl,
      shortCode,
      shortUrl
    });
 
  res.json({ shortUrl }); // ✅ CLEAN RESPONSE
} catch (err) {
    console.log(err);
    res.status(500).send("Error creating URL");
  }
};
// ✅ Redirect
exports.redirectUrl = async (req, res) => {
  try {
    const code = req.params.code;

    const url = await URL.findOne({ shortCode: code });

    if (!url) {
      return res.status(404).send("Not found");
    }
    // increase clicks
    url.clicks++;
    await url.save();

    res.redirect(url.originalUrl);

  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
};
// ✅ Analytics
exports.analyticUrl = async (req, res) => {
  try {
    const code = req.params.code;

    const url = await URL.findOne({ shortCode: code });

    if (!url) {
      return res.status(404).send("Not found");
    }

    res.json({
      originalUrl: url.originalUrl,
      clicks: url.clicks,
      createdAt: url.createdAt
    });

  } catch (err) {
    res.status(500).send("Error");
  }
};
