document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    displayUserList();
});

function displayUserList() {
    const userNames = [
        "Leanne Graham",
        "Ervin Howell",
        "Clementine Bauch",
        "Patricia Lebsack",
        "Chelsey Dietrich",
        "Mrs. Dennis Schulist",
        "Kurtis Weissnat",
        "Nicholas Runolfsdottir V",
        "Glenna Reichert",
        "Clementina DuBuque"
    ];

    const dataContainer = document.getElementById('api-data');

    if (!dataContainer) {
        console.error('Data container element not found');
        return;
    }

    dataContainer.innerHTML = ''; // Clear loading message

    const userList = document.createElement('ul');

    userNames.forEach(userName => {
        const listItem = document.createElement('li');
        listItem.textContent = userName;
        userList.appendChild(listItem);
    });

    dataContainer.appendChild(userList);
    console.log('User list displayed');
}
