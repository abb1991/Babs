class BottlesContainer extends React.Component {


  render() {
    return (
      <div>
        <ToggleBottlesButton onShowBottleClass={this.props.onShowBottleClass} showBottleClass={this.props.showBottleClass}/>
        <BottlesList  showBottleClass={this.props.showBottleClass}
                      unlockedBottle={this.props.unlockedBottle}
                      teaser={this.props.teaser}
                      faker={this.props.faker}
                      onAddReply={this.props.onAddReply}
                      replies={this.props.replies}
                      onRemoveEntry={this.props.onRemoveEntry}
                      bottles={this.props.bottles} />
      </div>
    )
  }
}