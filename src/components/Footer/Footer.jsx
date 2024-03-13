import React, { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";

const Footer = () => {
  const {language} = useContext(LanguageContext);
  return (
    <footer className="text-sm text-center text-zinc-800/90 dark:text-zinc-200/90 my-10 mx-5">
      {" "}
      {language == "en" && <p>© 2024 Portfolio AxelothLeohryn</p>}
      {language == "es" && <p>© 2024 Portfolio AxelothLeohryn</p>}
    </footer>
  );
};

export default Footer;
