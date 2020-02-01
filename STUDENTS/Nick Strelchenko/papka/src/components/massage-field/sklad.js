const mapDispatchToProps = dispatch => ({
    addText:(value)=> dispatch({type:"ADD_MSG",value}),
    addChat:()=>dispatch({type:"ADD_CHAT"}),
  })
  <Button variant="primary"onClick={()=>{this.props.addText({ChatId:ChatId,text:this.state.text,sender:"me"})}}>Отправить</Button>


  Updatedchats[action.ChatId].messageList = [...state.chats[action.ChatId].messageList,action.text,state.botMessages[getRandomInRange()].text]


  <LinkContainer to={"/chat/"+key} className="link text-primary">
  <div key={key}>
      {value.title}
  </div>
</LinkContainer>


componentDidMount() {
  fetch('/Api/messages.json')
  .then(response => response.json())
  .then(response => {
      response.forEach(msg => {
          console.log(msg)
          this.props.addMessage(msg.text,msg.sender,msg.ChatId)
      })
  })      
}