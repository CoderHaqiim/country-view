import "./globals.css";
import Nav from "../components/layout/nav";
import Footer from "../components/layout/footer";
import { ContinentProvider } from "../components/utilities/continentContext";
import { CountriesProvider } from "../components/utilities/countriesContext";
import { FavoritesProvider } from "../components/utilities/favoritesContext";
import { LoadingProvider } from "../components/utilities/loadingContext";
import RouteChangeListener from "../components/hooks/routeChangeListener";
import { NavigationProvider } from "../components/utilities/navigationContext";

export const metadata = {
  title: "countries viewer",
  description: "a web application that lets you view countries' information",
  icons: {
    icon: "/logo2.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <LoadingProvider>
          <FavoritesProvider>
            <CountriesProvider>
              <ContinentProvider>
                <NavigationProvider>
                  <RouteChangeListener/>
                  {children}
                  <Footer/>
                </NavigationProvider>
              </ContinentProvider>
            </CountriesProvider>
          </FavoritesProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
