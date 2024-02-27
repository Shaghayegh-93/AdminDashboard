import Footer from "@/ui/dashboard/footer/Footer";
import Navbar from "@/ui/dashboard/navbar/Navbar";
import Sidebadr from "@/ui/dashboard/sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex   ">
      <div className="basis-1/5 p-5 bg-bg-color-soft ">
        <Sidebadr />
      </div>
      <div className=" basis-4/5 p-5 ">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
