import "/src/components/Whatsapp/whatsapp.css";
import { SiWhatsapp } from "react-icons/si";

const Whatsapp = () => {
  const handleWhatsappClick = (event) => {
    event.preventDefault();
    // const message = encodeURIComponent("Hello Homaid! i need help");
    window.open('https://wa.me/8125522213', '_blank');
  };

  return (
    <div className="whatsapp_container">
      {/* <span className="chat-text">Chat with us</span> */}
      <a href="https://wa.me/8125522213?text=Hello%20Homaid!%20i%20need%20help" className="whatsapp_float" target="_blank" rel="noopener noreferrer" onClick={handleWhatsappClick}>
        <SiWhatsapp />
      </a>
    </div>
  );
};

export default Whatsapp;
