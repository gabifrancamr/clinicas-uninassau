import "./globals.css";
import { Provider } from "../components/ui/provider";

export const metadata = {
  title: "Clínica Escola Uninassau",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <body className="bg-color">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
