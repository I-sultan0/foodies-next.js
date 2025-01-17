import MainHeader from "@/components/main-header/main-header";
import "./globals.css";
import SessionWrapper from "@/components/SessionWrapper";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body>
          <MainHeader />
          {children}
        </body>
      </SessionWrapper>
    </html>
  );
}
