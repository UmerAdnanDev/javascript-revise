// try/catch with finally (always runs)
function processData(data) {
    let isProcessing = true;
    try {
        if (!data) {
            throw new Error('No data provided');
        }
        console.log('Processing:', data);
    } catch (error) {
        console.log('Error:', error.message);
    } finally { // runs anyway in the end
        console.log("Process Ended");
    }
}

processData('some data');
processData(null);

