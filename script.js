document.addEventListener('DOMContentLoaded', (event) => {
    // Get the buttons
    const startButton = document.querySelector('.calibration-button');
    const stopButton = document.querySelector('.stop-button');

    // Add event listener for the start calibration button
    startButton.addEventListener('click', () => {
        // Run the start.bat script

            fetch('http://localhost:3000/start')
            .then(response => response.text())
            .then(data => console.log(data))
            .catch((error) => {
                console.error('Error:', error);
            });

        exec('start.bat', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        });
        // Note: Running a batch script directly from JavaScript is not typically possible
        // You might need a server-side solution like Node.js to do this
        console.log('Start calibration button pressed. Running start.bat...');

        // Display a window in the webcam-feed class
        //const webcamFeed = document.querySelector('.webcam-feed');
        //webcamFeed.innerHTML = '<div>Your window content here...</div>';
    });

    // Add event listener for the stop button
    stopButton.addEventListener('click', () => {
        // Run the stop.bat script

        fetch('http://localhost:3000/stop')
            .then(response => response.text())
            .then(data => console.log(data))
            .catch((error) => {
                console.error('Error:', error);
            });
        
        exec('stop.bat', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        });
        // Note: Running a batch script directly from JavaScript is not typically possible
        // You might need a server-side solution like Node.js to do this
        console.log('Stop button pressed. Running stop.bat...');
    });
});
