function toggleSocialIcons() {
    const socialIcons = document.querySelector('.social-icons');
    socialIcons.style.display = (socialIcons.style.display === 'flex') ? 'none' : 'flex';
}

function closeSocialIconsOnClickOutside(event) {
    const shareButton = document.querySelector('.share-btn');
    const socialIcons = document.querySelector('.social-icons');
    
    
    if (!shareButton.contains(event.target) && !socialIcons.contains(event.target)) {
        socialIcons.style.display = 'none';
    }
}


document.addEventListener('click', closeSocialIconsOnClickOutside);