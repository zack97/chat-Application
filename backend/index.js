const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      { headers: { "private-key": "9e32e881-466b-484d-a281-77656b8341c2" } }
    );

    return res.status(response.status).json(response.data);
  } catch (err) {
    return res.status(err.response.status).json(err.response.data);
  }
});

const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log("Server is running on port 3001");
});
