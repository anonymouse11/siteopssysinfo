const express = require('express');
const SiteOpsBot = require('siteopsguardian');
const app = express();
const port = 3003;

app.get('/system-info', (req, res) => {
    const info = SiteOpsBot.getSystemInfo();
    res.json(info);
});

app.listen(port, () => {
    console.log(`SiteOpsSysInfo API running at http://localhost:${port}`);
});
