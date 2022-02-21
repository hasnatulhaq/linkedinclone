import './writemessage.css'
function writemessage(){
    return (
          <>
          <div className="chatbox__writemessage">
              <hr></hr>
              <textarea id="writemessage" className="chatbox__messagearea" rows="8">
                Write Message
  </textarea>
          </div>
          </>
    )
}


export default writemessage;