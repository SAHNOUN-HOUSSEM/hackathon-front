import React from "react";

const MedicalCampaignsModal = ({ closeModal }) => {
  // Your table data goes here
  const campaignData = [
    {
      lieu: "sfax",
      date: "22/12/2023",
      contact: "shocroom@rns.tn",
      confirmation: "Confirmation1",
    },
    {
      lieu: "sfax",
      date: "24/7/2024",
      contact: "shocroom@rns.tn",
      confirmation: "Confirmation2",
    },
    // Add more data as needed
  ];

  const handleParticipate = (campaign) => {
    const { lieu, date, contact } = campaign;

    // Prepare the email content
    const subject = "Confirmer participation";
    const body = `Je confirme ma participation à la campagne qui aura lieu le ${date} à ${lieu}.`;

    // Construct the mailto link
    const mailtoLink = `mailto:${contact}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the default email client with pre-filled fields
    window.location.href = mailtoLink;
  };

  return (
    <div className="campaigns-modal">
      <table>
        <thead>
          <tr>
            <th>Lieu</th>
            <th>Date</th>
            <th>Contact</th>
            <th>Confirmation</th>
          </tr>
        </thead>
        <tbody>
          {campaignData.map((campaign, index) => (
            <tr key={index}>
              <td>{campaign.lieu}</td>
              <td>{campaign.date}</td>
              <td>{campaign.contact}</td>
              <td>
                <span
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                  onClick={() => handleParticipate(campaign)}
                >
                  Participer
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: "center" }}>
        <button onClick={closeModal}>Fermer</button>
      </div>
    </div>
  );
};

export default MedicalCampaignsModal;
