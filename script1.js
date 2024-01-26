let donations = [];

function recordDonation() {
    const donorName = document.getElementById('donorName').value;
    const amount = document.getElementById('amount').value;

    if (donorName && amount) {
        const donation = {
            donorName: donorName,
            amount: parseFloat(amount)
        };

        donations.push(donation);
        displayDonations();
        clearForm();
    } else {
        alert('Please enter donor name and amount.');
    }
}

function displayDonations() {
    const donationList = document.getElementById('donationList');
    donationList.innerHTML = '';

    donations.forEach((donation, index) => {
        const donationItem = document.createElement('div');
        donationItem.classList.add('donation-item');
        donationItem.innerHTML = <strong>${donation.donorName}</strong> donated $${donation.amount.toFixed(2)};
        donationList.appendChild(donationItem);
    });
}

function clearForm() {
    document.getElementById('donorName').value = '';
    document.getElementById('amount').value = '';
}