class ToggleBottlesButton extends React.Component{
  render(){
    return(
      <section className="bottle-show" onClick={this.props.onShowBottleClass}>
        <button className={this.props.showBottleClass +"-button"} type="button">⇆
        </button>
      </section>
    )
  }
}