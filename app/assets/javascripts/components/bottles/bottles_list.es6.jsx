class BottlesList extends React.Component {

  render(){
    let self = this
    return(
      <div className={this.props.showBottleClass}>
          <h2 id="new-bottles">new bottle</h2>
          {this.props.unlockedBottle.body.length == 0 ?
            <div className="teaser-font">
              <span>{this.props.teaser} </span>
              <span className="teaser">{this.props.faker}</span>
            </div>
            :
            <p className="teaser-font">"waiting for new bottle..." </p>}
          <h2 id="your-bottles">unlocked bottles</h2>
          <ul>
          {this.props.unlockedBottle.body.length > 0 ?
            <Bottle onAddReply={this.props.onAddReply}
                      key={this.props.unlockedBottle.id}
                      data={this.props.unlockedBottle}
                      replies={this.props.replies}
                      onRemoveEntry={this.props.onRemoveEntry} />
            : null}
            {this.props.bottles.map((bottle, i) => {
              return <Bottle  onAddReply={self.props.onAddReply}
                              key={i}
                              data={bottle}
                              replies={self.props.replies}
                              onRemoveEntry={self.props.onRemoveEntry} />
          })}
        </ul>
      </div>
    )
  }
}