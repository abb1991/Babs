class EntriesList extends React.Component {

  render(){
    let entryType;
    let self = this
    return(
        <ul className="user-ul">
              {self.props.entries.map((entry) => {
                if(entry.is_private === true && entry.stream === false){
                  entryType = 'private'
                } else if (entry.is_private === false && entry.stream === false) {
                  entryType = 'public'
                } else if (entry.stream === true){
                  entryType = 'stream'
                }
                return <Entry entryType={entryType}
                              onAddReply={self.props.onAddReply}
                              key={entry.id}
                              data={entry}
                              all_prompts={self.props.all_prompts}
                              replies={self.props.replies}
                              onRemoveEntry={self.props.onRemoveEntry}
                              onInspo={self.props.onInspo}
                              userId={self.props.userId}/>
                })}
        </ul>
    )
  }
}