import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const buttonData = [
    { buttonText: "🧑🏻‍⚕️s'inscrire", route: "/signup" },

    { buttonText: "se connecter", route: "/signin" },
  ];

  const handleButtonClick = (i) => {
    navigate(buttonData[i].route);
  };

  return (
    <>
      <section className="centered-frame">
        <div className="photo-half">
          <img src="./pictures/login.png" alt=".." />
        </div>
        <div className="empty-half">
          <h2>BIENVENU SUR NOTRE PLATEFORME </h2>
          <div className="button-container">
            {buttonData.map((button, index) => (
              <div key={index} className="d-grid gap-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => handleButtonClick(index)}
                >
                  {button.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
