class Stream extends React.Component {

  constructor(){
    super();
    this.state={
      show: false
    }
    this.toggleStream = this.toggleStream.bind(this);
  }


  toggleStream(){
    var elems = $('.toggleStream')
    var elemsButton = $('.toggleStreamButton')
    if(this.state.show){
      elems.toArray().map((e)=>{
        $(e).removeClass('stream-small');
        $(e).addClass('stream-big');
      });
      elemsButton.toArray().map((e)=>{
        $(e).removeClass('stream-small-button');
        $(e).addClass('stream-big-button');
      });
      this.setState({show: !this.state.show})
    } else{
      elems.toArray().map((e)=>{
        $(e).removeClass('stream-big');
        $(e).addClass('stream-small');
      });
      elemsButton.toArray().map((e)=>{
        $(e).removeClass('stream-big-button');
        $(e).addClass('stream-small-button');
      });
      this.setState({show: !this.state.show})
    }
  }


  render() {
    return (
      <div>
        <button className="toggleStreamButton stream-big-button"
                  onClick={this.toggleStream}
                  type="button">⇅</button>
        <footer className="toggleStream marquee stream-big">
          <span>{this.props.streams.join('.....')}</span>
        </footer>
      </div>
    )
  }
}