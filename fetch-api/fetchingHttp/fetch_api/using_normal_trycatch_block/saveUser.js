console.log("connected script with html page");
const p = document.getElementById("p1");

async function createUser() {
    const userData = {
        "id": 11,
        "name": "Chota Bheem",
        "username": "Bheem",
        "email": "Bheem@gmail.com",
        "address": {
            "street": "Mountain View",
            "suite": "Apt. 100",
            "city": "Dolakpur",
            "zipcode": "99999-99999",
            "geo": {
                "lat": "-11.1111",
                "lng": "22.2222"
            }
        }
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const newUser = await response.json();

        // Update the HTML element with the newly created user data
        p.innerText = JSON.stringify(newUser, null, 2);
    } catch (error) {
        // Handle errors and update the HTML element with an error message
        p.innerText = `Error: ${error.message}`;
    } finally {
        // This block will be executed whether there is an error or not
        p.innerText += "\nCompleted creating user";
    }
}

// Call the function to initiate the POST request
createUser();
