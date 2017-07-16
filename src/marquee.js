const { h, Text, Component } = require("ink");

class Marquee extends Component {
  constructor(props) {
    super(props);

    this.state = { pos: 0, chars: "" };
    this.updateChars = this.updateChars.bind(this);
  }

  render() {
    const style = { [this.props.color]: true };
    return (
      <Text {...style}>
        {this.state.chars}
      </Text>
    );
  }

  componentDidMount() {
    this.updateChars();
    this.timer = setInterval(this.updateChars, this.props.speed);
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  updateChars() {
    const { text, width } = this.props;
    const pos = this.state.pos;
    let tmp;
    if (pos < width) {
      tmp = " ".repeat(width - pos) + text;
    } else {
      tmp = text.slice(pos - width, width + pos);
    }
    const chars = tmp.slice(0, width).padEnd(width, " ");
    this.setState({ chars, pos: pos + 1 });

    if (pos >= width + text.length) this.clearTimer();
  }

  clearTimer() {
    console.log("ohgoe");
    clearInterval(this.timer);
  }
}

Marquee.defaultProps = {
  text: "",
  color: "green",
  direction: "rtl",
  speed: 500,
  width: 80,
  repeat: true
};

module.exports = Marquee;
