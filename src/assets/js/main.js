const sidebar = document.getElementById('sidebar');
const toggleLinks = document.querySelectorAll('.toggle');

toggleLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        sidebar.classList.toggle('active');
        sidebar.classList.toggle('inactive');
    });
});