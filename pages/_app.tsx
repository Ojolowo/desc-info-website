import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Navbar } from "components/navbar";
import { Toggler } from "components/toggler";
import { Footer } from "containers/footer";
import { GlobalStyles } from "theme/global";
import { lightMode, darkMode } from "theme/themes";
import "styles/index.css";

function MyApp({ Component, pageProps }) {
   const [theme, setTheme] = useState("light");

   const toggleTheme = () => {
      theme == "light" ? setTheme("dark") : setTheme("light");
   };
   return (
      <ThemeProvider theme={theme === "light" ? lightMode : darkMode}>
         <GlobalStyles />
         <Toggler changeTheme={toggleTheme} />
         <Navbar />
         <Component {...pageProps} />
         <Footer />
      </ThemeProvider>
   );
}

export default MyApp;
