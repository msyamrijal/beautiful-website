const fetchData = async () => {
    const url = 'https://script.google.com/macros/s/AKfycby9sPywic_2ifeYBzE3dQMHfrwkR4-fQv-bNx74HMduvcq5Rr4r9MY6GGEYNqI44WRI/exec';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};

const displayData = (data) => {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; // Clear previous content
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'data-item';
        div.textContent = JSON.stringify(item); // Adjust this based on the structure of your data
        container.appendChild(div);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});