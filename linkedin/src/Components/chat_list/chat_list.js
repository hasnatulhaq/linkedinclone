import '../chat_list/chat_list.css';
import Topheading from "../heading/heading";
import Searchbox from "../searchbar/searchbar";
import Userlist from "../userlist/userlist";

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
