import {HeaderResponsive} from "../components/Header";

export default function Landing(){

    return(
        <HeaderResponsive links={[
            {
                "link": "/",
                "label": "Home"
            },
            {
                "link": "/pantry",
                "label": "Pantry"
            },
            {
                "link": "/recipes",
                "label": "Recipes"
            },
            {
                "link": "/account",
                "label": "Account"
            }
        ]}/>
    );

}