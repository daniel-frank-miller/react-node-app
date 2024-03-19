import "/src/components/Whatsapp/whatsapp.css";
import { SiWhatsapp } from "react-icons/si";
import '@fortawesome/fontawesome-free/css/all.css';


const Whatsapp = () => {
  const handleWhatsappClick = (event) => {
    event.preventDefault();
    // const message = encodeURIComponent("Hello Homaid! i need help");
    window.open('https://wa.me/8125522213', '_blank');
  };

  return (
    <div className="whatsapp_container">
      	<a href="https://wa.me/8125522213" className="btn-whatsapp-pulse" target="_blank">
       {/* <SiWhatsapp /> */}
       <i className="fab fa-whatsapp"></i>
    </a>
    </div>
  );
};

export default Whatsapp;
