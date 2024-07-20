document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    fetchUserData();
});


async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    if (!dataContainer) { 
        console.error('Data container element not found');
        return;
    }


    try {
        const response = await fetch(apiUrl);
        console.log('Fetching data from API')

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const users = await response.json()
        console.log("Data fetched successfully:", users);

        dataContainer.innerHTML = ''; // Clear loading message

        constuserList = document.createElement('li');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList); // Append userList to dataContainer
        console.log('User list displayed');

    } 
    catch (error) {
        console.error('Failed to fetch user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }

} 