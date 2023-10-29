function updateCharacterCount(textarea) {
    const maxLength = 500;
    const currentLength = textarea.value.length;
    const remaining = maxLength - currentLength;
    const characterCount = document.getElementById('characterCount');
    
    characterCount.textContent = `${remaining} characters remaining`;
}

function validateForm() {
    const message = document.getElementById('content').value;
    if (message.length > 500) {
        alert('Message should not exceed 500 characters.');
        return false;
    }
    return true;
}