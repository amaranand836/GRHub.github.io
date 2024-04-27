function showCompanyDetails() {
    const companyDetails = document.getElementById('companyDetails');

    if (companyDetails) {
        companyDetails.style.display = 'block';
    }

    hideAllForms();
    hideDisplayImage();
    hideBookNowButton();
}

function showBooking() {
    const customizationForm = document.getElementById('customizationForm');

    if (customizationForm) {
        customizationForm.style.display = 'block';
    }

    // Hide company details
    const companyDetails = document.getElementById('companyDetails');
    if (companyDetails) {
        companyDetails.style.display = 'none';
    }

    hideDisplayImage();
    hideBookNowButton();
}

function closeBooking() {
    hideAllForms();
    showDisplayImage();
    showBookNowButton();
}

function showCustomization() {
    hideAllForms();
    const customizationForm = document.getElementById('customizationForm');
    if (customizationForm) {
        customizationForm.style.display = 'block';
    }
}

function showPickupAddress() {
    hideAllForms();
    const pickupAddressForm = document.getElementById('pickupAddressForm');
    if (pickupAddressForm) {
        pickupAddressForm.style.display = 'block';
    }
}

function showPickupTime() {
    hideAllForms();
    const pickupTimeForm = document.getElementById('pickupTimeForm');
    if (pickupTimeForm) {
        pickupTimeForm.style.display = 'block';
    }
}

function hideAllForms() {
    const forms = document.querySelectorAll('.bookingForm');
    forms.forEach(form => {
        form.style.display = 'none';
    });
}

function hideDisplayImage() {
    const displayImage = document.querySelector('.displayImage');
    if (displayImage) {
        displayImage.style.display = 'none';
    }
}

function showDisplayImage() {
    const displayImage = document.querySelector('.displayImage');
    if (displayImage) {
        displayImage.style.display = 'block';
    }
}

function hideBookNowButton() {
    const bookNowButton = document.querySelector('.bookNowButton');
    if (bookNowButton) {
        bookNowButton.style.display = 'none';
    }
}

function showBookNowButton() {
    const bookNowButton = document.querySelector('.bookNowButton');
    if (bookNowButton) {
        bookNowButton.style.display = 'block';
    }
}

function goToHomePage() {
    window.location.href = './index.html'; 
}

function book() {
    // Show booking section when "Book Now" is clicked
    showBooking();
}
