// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select all bag items
    const bagItems = document.querySelectorAll('.bag-item');

    // Add a click event listener to each bag item
    bagItems.forEach(item => {
        item.addEventListener('click', function () {
            // Get the name and price of the selected bag
            const bagName = this.querySelector('p').textContent;
            const bagPrice = this.querySelector('span').textContent;

            // Display an alert with the bag's details
            alert(`You selected: ${bagName}\nPrice: ${bagPrice}`);
        });
    });
});
