import Footer from "../../Footer";
import Header from "../../Header";
import Feed from "./Feed";
import ChitForm from "./ChitForm";

const Homepage = () => {
    const user = localStorage.getItem("user");
    return (
        <>
        <Header />
        {user && <ChitForm />}
        <Feed />
        <Footer />
        </>
    );
};

export default Homepage;