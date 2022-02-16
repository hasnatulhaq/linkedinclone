import Topheading from "./heading";
import Searchbox from "./searchbar";
import Userlist from "./userlist";

function msglist(){
    return (
              <>
              <div className="chatbox__list">
                  <Topheading/>
                  <Searchbox/>
                  <Userlist/>
              </div>
              </>
    )
}


export default msglist;