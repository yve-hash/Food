// Function 1: Handles the menu pop-up interaction (menu.html and index.html)
const handleMenuPopups = () => {
    // Select all elements that function as the category links
    const categoryLinks = document.querySelectorAll('.menu-categories a');
    // Select all menu sections that are meant to appear as pop-ups
    const menuSections = document.querySelectorAll('.menu-section');
    // Select all close buttons (the 'back-btn')
    const closeButtons = document.querySelectorAll('.back-btn');
    
    // Helper function to hide all pop-ups
    const hideAllPopups = () => {
        menuSections.forEach(section => {
            section.style.display = 'none'; // DOM Manipulation: Hiding elements
        });
    };

    // Initially hide all pop-ups when the script loads
    hideAllPopups();
    
    // Add event listeners to category links to show the target section
    categoryLinks.forEach(link => {
        // Event 3: onclick event
        link.addEventListener('click', (e) => {
            // Prevent the default anchor link behavior
            e.preventDefault(); 
            
            const targetId = link.getAttribute('href'); // e.g., '#adobo' or '#pork'
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                hideAllPopups(); // Ensure only one pop-up is visible
                // DOM Manipulation: Showing the element
                targetSection.style.display = 'flex'; 
            }
        });
    });

    // Add event listeners to close buttons to hide the current section
    closeButtons.forEach(button => {
        // Event 3: onclick event
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // DOM Manipulation: Hiding the parent section
            e.target.closest('.menu-section').style.display = 'none'; 
        });
    });
};

// Function 2: Handles the contact form validation (contact.html)
const handleContactForm = () => {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        // Event 3: onsubmit event
        contactForm.addEventListener('submit', (e) => {
            // Get input values (Interaction 2: Form validation - Check if fields are empty)
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation check
            if (name === '' || email === '' || message === '') {
                // The browser's 'required' attribute handles this, 
                // but a custom message is added for demonstration.
                alert('Please ensure all required fields are filled out before sending.'); // Interaction 1: Small alert
                e.preventDefault(); // Stop form submission
            } else {
                // If validation passes (in a real app, this would be submitted to a server)
                alert('Thank you for your message! We will get back to you soon.');
                e.preventDefault(); // Stop form submission for this client-side demo
                contactForm.reset(); // Clear the form
            }
        });
    }
};

// Function 3: Handles the Home Page button text change (index.html)
const handleHeroButton = () => {
    const heroButton = document.querySelector('#hero .btn');
    
    if (heroButton) {
        // Event 3: onclick event
        heroButton.addEventListener('click', (e) => {
            // Interaction 1: Button that changes text
            // DOM Manipulation: Editing text
            e.target.textContent = 'Exploring the Menu...'; 
            // Optional: Change style
            e.target.style.backgroundColor = '#d9534f'; // DOM Manipulation: Changing styles
        });
    }
};


// Execute all handlers when the page content is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    handleMenuPopups();
    handleContactForm();
    handleHeroButton();
});