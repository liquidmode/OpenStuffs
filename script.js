// Optional: Smooth scrolling effect for buttons or other interactive elements
document.querySelector('.explore-btn').addEventListener('click', () => {
    window.scrollTo({
        top: document.querySelector('.gallery-section').offsetTop,
        behavior: 'smooth'
    });
});
document.getElementById('discover-more-btn').addEventListener('click', function() {
    var moreContent = document.getElementById('more-content');
    if (moreContent.classList.contains('show')) {
        moreContent.classList.remove('show');
    } else {
        moreContent.classList.add('show');
    }
});
document.querySelectorAll('.more-item').forEach(item => {
    item.addEventListener('click', function() {
        // Get the URL from the data-page attribute
        const pageUrl = this.getAttribute('data-page');
        // Redirect to the corresponding page
        window.location.href = pageUrl;
    });
});
document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', function() {
        const pageUrl = this.getAttribute('data-page');
        window.location.href = pageUrl; // Redirect to the corresponding page
    });
});


document.getElementById('devices-item').addEventListener('click', function() {
    var options = document.getElementById('device-options');
    if (options.style.display === 'block') {
        options.style.display = 'none';
    } else {
        options.style.display = 'block';
    }
});
