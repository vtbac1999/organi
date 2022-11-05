import Footer from "../footer";
import Header from "../header";
import Navbar from "../navbar";

function DefautLayout({children}) {
    return (
        <>
            <Header/>
            <div className="content">
                {children}
            </div>
            <Footer/>
        </>
      );
}

export default DefautLayout;