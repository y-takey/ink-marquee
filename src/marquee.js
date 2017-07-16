const { h, Text, Component } = require("ink");

class Marquee extends Component {
  constructor(props) {
    super(props);

    this.state = { chars: "" };
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
    this.startTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  updateChars() {
    const { text, width, repeat, direction } = this.props;
    const pos = this.state.pos;
    let tmp;
    if (pos < width) {
      tmp = " ".repeat(width - pos) + text;
    } else {
      tmp = text.slice(pos - width, width + pos);
    }
    tmp = tmp.slice(0, width).padEnd(width, " ");
    const chars = direction === "ltr" ? tmp.split("").reverse().join("") : tmp;
    this.setState({ chars, pos: pos + 1 });

    if (pos >= width + text.length) {
      this.clearTimer();

      if (repeat) this.startTimer();
    }
  }

  startTimer() {
    this.setState({ pos: 0 });
    this.timer = setInterval(this.updateChars, this.props.speed);
  }

  clearTimer() {
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
