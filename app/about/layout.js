import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
export const metadata = {
  title: "Add English Tests",
  description: "Add english text for test",
};
export default function root({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}