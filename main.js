document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const contactsTableBody = document.querySelector('#contactsTable tbody');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;

        if (name && phone) {
            const newRow = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = name;
            newRow.appendChild(nameCell);

            const phoneCell = document.createElement('td');
            phoneCell.textContent = phone;
            newRow.appendChild(phoneCell);

            contactsTableBody.appendChild(newRow);

            contactForm.reset();
        }
    });
});
