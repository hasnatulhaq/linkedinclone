import Topheading from "./heading";
import Searchbox from "./searchbar";

function msglist(){
    return (
              <>
              <div className="chatbox__list">
                  <Topheading/>
                  <Searchbox/>
                  <h1>msglist</h1>
              </div>
              </>
    )
}


export default msglist;