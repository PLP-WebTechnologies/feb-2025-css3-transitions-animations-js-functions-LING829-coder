document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const animationToggle = document.getElementById('animation-toggle');
    const pulseBtn = document.getElementById('pulse-btn');
    const rotateBtn = document.getElementById('rotate-btn');
    const colorBtn = document.getElementById('color-btn');
    const demoImage = document.getElementById('demo-image');
    const notification = document.getElementById('notification');
    
    // Load saved preferences
    loadPreferences();
    
    // Event Listeners
    animationToggle.addEventListener('change', toggleAnimations);
    pulseBtn.addEventListener('click', triggerPulse);
    rotateBtn.addEventListener('click', triggerRotate);
    colorBtn.addEventListener('click', triggerColorChange);
    
    // Toggle animations globally
    function toggleAnimations() {
        const animationsEnabled = animationToggle.checked;
        savePreference('animationsEnabled', animationsEnabled);
        showNotification('Animations ' + (animationsEnabled ? 'enabled' : 'disabled'));
        
        // Disable all animations if toggle is off
        if (!animationsEnabled) {
            demoImage.classList.remove('pulse-animation', 'rotate-animation', 'color-animation');
        }
    }
    
    // Trigger pulse animation
    function triggerPulse() {
        if (!animationToggle.checked) return;
        
        demoImage.classList.remove('rotate-animation', 'color-animation');
        demoImage.classList.add('pulse-animation');
        showNotification('Pulse animation activated');
    }
    
    // Trigger rotate animation
    function triggerRotate() {
        if (!animationToggle.checked) return;
        
        demoImage.classList.remove('pulse-animation', 'color-animation');
        demoImage.classList.add('rotate-animation');
        showNotification('Rotation animation activated');
    }
    
    // Trigger color change animation
    function triggerColorChange() {
        if (!animationToggle.checked) return;
        
        demoImage.classList.remove('pulse-animation', 'rotate-animation');
        demoImage.classList.add('color-animation');
        showNotification('Color change animation activated');
    }
    
    // Load preferences from localStorage
    function loadPreferences() {
        const animationsEnabled = getPreference('animationsEnabled', true);
        animationToggle.checked = animationsEnabled;
    }
    
    // Save preference to localStorage
    function savePreference(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    
    // Get preference from localStorage
    function getPreference(key, defaultValue) {
        const value = localStorage.getItem(key);
        return value !== null ? JSON.parse(value) : defaultValue;
    }
    
    // Show notification
    function showNotification(message) {
        notification.textContent = message;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    }
});