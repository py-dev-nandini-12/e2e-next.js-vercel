import express from "express";
import { exec } from "child_process";

const app = express();
app.use(express.json()); // Parse JSON payloads from Vercel

// Listen for Vercel Webhook Events
app.post("/webhook", (req, res) => {
  const payload = req.body;

  if (payload.type === "deployment-ready") {
    const deploymentUrl = payload.payload.url; // Deployment URL from Vercel

    console.log(`✅ Deployment Ready: ${deploymentUrl}`);

    // Run E2E Tests Automatically
    exec(`./run-tests.sh ${deploymentUrl}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`❌ Tests Failed for ${deploymentUrl}`);
        console.error(stderr);
        res.status(500).send("Tests failed");
        return;
      }

      console.log(`✅ Tests Passed for ${deploymentUrl}`);
      console.log(stdout);
      res.status(200).send("Tests passed");
    });
  } else {
    console.log("⚠️ Received Unsupported Webhook Event");
    res.status(400).send("Unsupported event");
  }
});

// Start Webhook Listener Server
const PORT = 3000; // Your webhook server port
app.listen(PORT, () => {
  console.log(`🌍 Webhook listener running on http://localhost:${PORT}`);
});
