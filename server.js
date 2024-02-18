const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/start', (req, res) => {
    exec('start.bat', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
    res.send('Started');
});

app.get('/stop', (req, res) => {
    exec('stop.bat', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
    res.send('Stopped');
});

app.listen(3000, () => console.log('Server running on port 3000'));
