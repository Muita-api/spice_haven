import {useTranslation} from "react-i18next";
function App(){
    const {t}=useTranslation("common");
    return(
        <div className="App">
            <p>{t('app.interpolation', {framework:"react-i18next"})}</p>
            <h2>Find us at </h2>
                        <div><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Westlands,%20Nairobi+(The%20Spice%20Haven)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/drones/">The Spice Haven</a></iframe></div>
                    
        </div>
    )
}
