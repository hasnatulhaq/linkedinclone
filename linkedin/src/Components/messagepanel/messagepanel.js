import Topheading from "../heading/heading";
import Threedots from "../threedot/threedots";
import Writemessage from "../writemessage/writemessage"

function Chatpanel(){
    return(
        <>
        <div>
        <div><Topheading/>  <span><Threedots/></span></div>
        </div>
        <div>
            <p>Abdul basit kazmi</p>
            <p>Tag line</p>
        </div>
        <Writemessage/>
        </>
    )
}

export default Chatpanel;