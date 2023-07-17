import "animate.css";

import "./assets/css/App.css";
import Header from "./Header";
import Footer from "./Footer";

import Wh from "./assets/image/whatsapp.svg";
import It from "./assets/image/instagram.svg";
import Be from "./assets/image/behance.svg";
import Em from "./assets/image/email.svg";
import ButtonLink from "./components/ButtonLink";

function App() {
  return (
    <div>
      <div className="w-screen min-h-screen flex flex-col items-center">
        <Header />

        <div className="flex flex-col justify-center items-center gap-4 mt-8 w-[80%] md:max-w-md">
          <ButtonLink
            icon={Wh}
            label="ENTRE EM CONTATO"
            url="https://wa.me/5563991179925?text=Ol%C3%A1%21+Me+chamo"
            ii="animate__animated animate__fadeInDown animate__delay-1s animate__faster"
          />
          <ButtonLink
            icon={Be}
            label="MEU PORTIFOLIO"
            url="https://www.behance.net/anzodesigner"
            ii="animate__animated animate__fadeInUp animate__delay-1s animate__faster"
          />
          <ButtonLink
            icon={Em}
            label="MANDAR EMAIL"
            url="mailto:anzodesigner.ra@gmail.com"
            ii="animate__animated animate__fadeInDown animate__delay-1s animate__faster"
          />
          <ButtonLink
            icon={It}
            label="@ANZO.DESIGNER"
            url="https://www.instagram.com/anzo.designer/"
            ii="animate__animated animate__fadeInUp animate__delay-1s animate__faster"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
