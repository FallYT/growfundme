// Simulated campaign list
let campaigns = [
    { title: 'Support Growtopia School', goal: 100, raised: 30 },
    { title: 'World Building Project', goal: 150, raised: 50 }
];

// Function to update the list of campaigns on the page
function updateCampaignList() {
    const campaignList = document.getElementById('campaigns');
    campaignList.innerHTML = ''; // Clear the list before adding new campaigns

    campaigns.forEach((campaign) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${campaign.title}</strong><br>
            Goal: <img src="https://i.imgur.com/lq43bw9_d.webp?maxwidth=128&shape=square" alt="WL logo"> ${campaign.goal} WL - Raised: <img src="https://i.imgur.com/yofqRCz_d.webp?maxwidth=128&shape=square" alt="DL logo"> ${campaign.raised} DL<br>
            <progress value="${campaign.raised}" max="${campaign.goal}"></progress>
            <button class="donate-btn" onclick="donateToCampaign('${campaign.title}')">Donate</button>
        `;
        campaignList.appendChild(listItem);
    });
}

// When the user creates a campaign
document.getElementById('create-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the page from reloading on form submission

    const title = document.getElementById('campaign-title').value;
    const description = document.getElementById('campaign-description').value;
    const goal = parseInt(document.getElementById('campaign-goal').value);

    // Add the new campaign to the list
    campaigns.push({ title, goal, raised: 0 });

    updateCampaignList(); // Update the campaign list on the page

    // Clear the form
    document.getElementById('create-form').reset();
});

// Function to handle donations to campaigns
function donateToCampaign(campaignTitle) {
    const campaign = campaigns.find(c => c.title === campaignTitle);
    if (campaign) {
        // You can add a pop-up or form here to let users select WL/DL for donation
        const donationAmount = parseInt(prompt(`Enter the amount to donate to "${campaign.title}" in WL/DL`));
        if (donationAmount && donationAmount > 0) {
            campaign.raised += donationAmount;
            if (campaign.raised >= campaign.goal) {
                alert(`Campaign "${campaign.title}" is complete!`);
            }
            updateCampaignList(); // Update the campaign list with the new donation
        } else {
            alert("Please enter a valid donation amount.");
        }
    }
}

// Update the campaign list when the page loads
updateCampaignList();
