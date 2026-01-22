
gsap.registerPlugin(ScrollTrigger);

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});


gsap.to(".hero-text", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "power4.out",
    stagger: 0.2
});


gsap.utils.toArray(".project-card").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%", 
        },
        y: 50,
        opacity: 0,
        duration: 1
    });
});


const form = document.getElementById('contactForm');
const statusMsg = document.getElementById('status-msg');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    try {
        // Assuming backend runs on port 5000
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            statusMsg.textContent = "Message sent successfully!";
            form.reset();
        } else {
            statusMsg.textContent = "Error sending message.";
        }
    } catch (error) {
        console.error("Error:", error);
        statusMsg.textContent = "Server error. Is the backend running?";
    }
});