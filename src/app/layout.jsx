import "./globals.css";
import Nav from "../components/layout/nav";
import Footer from "../components/layout/footer";
import { ContinentProvider } from "../components/hooks/utilities/continentContext";
import { CountriesProvider } from "../components/hooks/utilities/countriesContext";
import { FavoritesProvider } from "../components/hooks/utilities/favoritesContext";
import { LoadingProvider } from "../components/hooks/utilities/loadingContext";

export const metadata = {
  title: "countries viewer",
  description: "a web application that lets you view countries' information",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <LoadingProvider>
          <FavoritesProvider>
            <CountriesProvider>
              <ContinentProvider>
                <Nav/>
                  {children}
                <Footer/>
              </ContinentProvider>
            </CountriesProvider>
          </FavoritesProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
