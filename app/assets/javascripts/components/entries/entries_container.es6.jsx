class EntriesContainer extends React.Component {

  render(){
    return(
      <div className={this.props.userEntries}>
        <div>
          <EntryBox onAddEntry={this.props.onAddEntry} inspo={this.props.inspo}/>
        </div>
        <h2 className="user-header" >entries</h2>
        <EntriesList entries={this.props.entries}
                      all_prompts={this.props.all_prompts}
                      replies={this.props.replies}
                      onRemoveEntry={this.props.onRemoveEntry}
                      onInspo={this.props.inspo.question}
                      userId={this.props.userId}
                      onAddReply={this.props.onAddReply} />
      </div>
    )
  }
}