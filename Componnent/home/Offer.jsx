import img from "../../public/default-img.jpg";

export default function Offer() {

    const style = {

        background: `linear-gradient(#00000065,#00000065),url('${img.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "Cover",
        height: "100%"
    }



    return (
        <div style={style}>

        </div>
    )
}
