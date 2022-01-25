import { useEffect } from "react";

const EasterEggsPersonaPage = ({ persona }) => {
    let pages: any;

    useEffect(() => {
        // if ()
        pages = require(`./personas/${persona}`);
    }, [])

    return(
        <pages/>
    )
}

export default EasterEggsPersonaPage;