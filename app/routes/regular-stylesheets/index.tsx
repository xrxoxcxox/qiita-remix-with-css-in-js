import { Button, links as buttonLinks } from "~/components/RegularStylesheets/Button";
import { Header, links as headerLinks } from "~/components/RegularStylesheets/Header";
import { Navigation, links as navigationLinks } from "~/components/RegularStylesheets/Navigation";
import { Footer, links as footerLinks } from "~/components/RegularStylesheets/Footer";
import styles from "~/styles/global.css";

export function links() {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Sans:wght@400;700&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/icon?family=Material+Icons+Round",
    },
    ...buttonLinks(),
    ...headerLinks(),
    ...navigationLinks(),
    ...footerLinks(),
    { rel: "stylesheet", href: styles },
  ];
}

export default function RegularStylesheets() {
  return (
    <div>
      <Header />
      <Navigation />
      <h1>Regular Stylesheets</h1>
      <Button>Button</Button>
      <Footer />
    </div>
  );
}
