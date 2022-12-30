
import Footer from "../../Componnent/Footer"
import OtherPageHeader from "../../Componnent/header/OtherPageHeader"

export default function SingleHotel() {
    return (
        <div>fdgdg</div>
    )
}


SingleHotel.getLayout = function getLayout(page) {
    return (
        <>
            <OtherPageHeader />
            {page}
            <Footer />
        </>
    )
}
