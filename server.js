import express from "express";
import path from "path";
import {fileURLToPath} from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

// Serve static files from the "dist" directory
if (process.env.NODE_ENV === "production") {
    app.use((req, res, next) => {
        if (req.header("x-forwarded-proto") !== "https")
            res.redirect(`https://${req.header("host")}${req.url}`);
        else next();
    });
}
app.use(express.static(path.resolve(__dirname, "dist")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
// Listen on 0.0.0.0 to be accessible from outside the container
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});