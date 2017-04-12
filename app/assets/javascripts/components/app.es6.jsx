class App extends React.Component {

 constructor(){
    super();
    this.state ={
      user: "",
      entries: [],
      replies: [],
      streams: [],
      teaser: '',
      inspo: '',
      bottles:  [],
      all_prompts: [],
      showEntryForm: true,
      showBottle: false,
      showBottleClass: "bottle-entries-big",
      faker: "",
      unlockedBottle: {body: ""},
      userEntries: "user-entries"
    };
    this.addEntry = this.addEntry.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
    this.addReply = this.addReply.bind(this);
    this.updateStreams = this.updateStreams.bind(this);
    this.onShowBottleClass = this.onShowBottleClass.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/users/show',
    })
    .done((userResponse) => {
      $.ajax({
        url: '/entries/show',
      })
      .done((entryResponse) => {
        this.setState({
          user: userResponse,
          entries: entryResponse.entries,
          replies: entryResponse.responses,
          teaser: entryResponse.teaser,
          inspo: entryResponse.inspo,
          all_prompts: entryResponse.all_prompts,
          faker: entryResponse.faker
        });
        entryResponse.bottles.length > 0 ? this.setState({bottles: entryResponse.bottles}) : null
      });

    });
    var self = this;
    setInterval(function(){
      $.ajax({url: '/entries/stream', success: function(data){
      }, dataType: "json"}).done(function(response){
        self.updateStreams({streams: response.streams})
      })
    }, 1000, true);
  }

  updateStreams(response) {
    this.setState(response);
  }

  addEntry(response){
    let entries = this.state.entries;
    this.setState({
                  entries: [response.entry, ...entries],
                  unlockedBottle: response.bottle,
                  showBottle: true});
   }

  addReply(reply){
    let replies = this.state.replies;
    this.setState({replies: replies.concat(reply)});
  }

  removeEntry(entry) {
    let newEntries = this.state.entries.filter(function(e){return e.id !== entry.id});
    this.setState({entries: newEntries});
  }

  onShowBottleClass(){
    if(this.state.showBottleClass === "bottle-entries-big"){
      this.setState({showBottleClass: "bottle-entries-small",
                     userEntries: "user-entries-large"})
    } else{
      this.setState({showBottleClass: "bottle-entries-big",
                     userEntries: "user-entries"})
    }
  }

  render () {
    return (
      <div>
        <BottlesContainer showBottleClass={this.state.showBottleClass}
                          onShowBottleClass={this.onShowBottleClass}
                          unlockedBottle={this.state.unlockedBottle}
                          teaser={this.state.teaser}
                          faker={this.state.faker}
                          onAddReply={this.addReply}
                          replies={this.state.replies}
                          onRemoveEntry={this.removeEntry}
                          bottles={this.state.bottles} />

        <EntriesContainer entries={this.state.entries}
                          all_prompts={this.state.all_prompts}
                          replies={this.state.replies}
                          onRemoveEntry={this.removeEntry}
                          inspo={this.state.inspo}
                          userId={this.state.user.id}
                          onAddReply={this.addReply}
                          userEntries={this.state.userEntries}
                          onAddEntry={this.addEntry}/>

        <Stream streams={this.state.streams} />
      </div>
    )
  }
}
