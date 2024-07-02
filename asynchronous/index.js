const user = {
    "id": 13,
    "name": "yoyo",
    "email": "yoyo@gmail.com",
    "phone": 98709877607
};

const postUser = async (user) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        // Check if the request was successful (status code 2xx)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Log headers of the response
        console.log(response.headers);

        // Parse and log the JSON response body
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error("Error posting user data:", error);
    }
};

postUser(user);
