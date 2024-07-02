console.log("connected script with html page");
const p = document.getElementById("p1");

async function getUser() {
    try {
        p.innerText += "started fetching";
        const response = await fetch("https://jsonplaceholder.typicode.com/users/10");
        const userData = await response.json();

        // Update the HTML element with user data
        p.innerText = JSON.stringify(userData, null, 2);
    } catch (error) {
        // Handle errors and update the HTML element with an error message
        p.innerText = `Error: ${error.message}`;
    } finally {
        // This block will be executed whether there is an error or not
        p.innerText += "\nCompleted fetching";
    }
}

// Call the function to initiate the fetching process
getUser();
