import { Fragment } from "react";
import Header from "./Header";
import MainComponent from "./MainComponent";
import Footer from "./Footer";
 
function Page() {
    return (
        <Fragment>
            <Header />
            <MainComponent />
            <Footer />
        </Fragment>

    )
}

export default Page;