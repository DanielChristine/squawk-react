import React, {Component} from "react";
import { connect } from "react-redux";
import $ from "jquery";
import { flockRequest, acceptFlock, declineFlock, removeFlock, cancelFlock } from "../../actions/flockActions";
import PropTypes from "prop-types";

class MyFlock extends Component {
  constructor(props) {
    super(props);
    const [ state, setstate ] = useState( {
      usernameOrEmailAddress: ""
    });
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.flockRequest(this.state.usernameOrEmailAddress);
    alert("Flock request sent.");
  }

  onAccept(e) {
    e.preventDefault();
    this.props.acceptFlock(this.state.usernameOrEmailAddress);
    alert("You accepted a request if one exists.");
  }
  
  onDecline(e) {
    e.preventDefault();
    this.props.acceptFlock(this.state.usernameOrEmailAddress);
    alert("You denied a request if one exists.");
  }
  
  onRemove(e) {
    e.preventDefault();
    this.props.acceptFlock(this.state.usernameOrEmailAddress);
    alert("You removed a request if one exists");
  }
    
  onCancel(e) {
    e.preventDefault();
    this.props.acceptFlock(this.state.usernameOrEmailAddress);
    alert("You canceled a sent request, if it ever existed.");
  }


  render() {
    return (
      <div className="col-6">
        <div className="login-div">
          <h3 className="text-center">Find your flock!</h3>
          <form id="form1" onSubmit={(e) => this.onSubmit(e)}>
            Flock request:
            <input
              type="text"
              name={this.state.usernameOrEmailAddress}
              value={this.state.usernameOrEmailAddressOfRequestedFriend}
              onChange={(e) => this.onChange(e)}
            />

            <button type="submit">Submit</button>

          </form>

          <form id="form2" onSubmit={(e) => this.onAccept(e)}>
            Accept flock:
            <input
              type="text"
              name="usernameOfNewFriend"
              value={this.state.usernameOrEmailAddress}
              onChange={(e) => this.onChange(e)}
            />

            <button type="submit">Submit</button>

          </form>

          <form id="form3" onSubmit={(e) => this.onDecline(e)}>
            Flock off (deny flock):
            <input
              type="text"
              name="usernameOfNotFriend"
              value={this.state.usernameOrEmailAddress}
              onChange={(e) => this.onChange(e)}
            />

            <button type="submit">Submit</button>

          </form>

          <form id="form4" onSubmit={(e) => this.onRemove(e)}>
            Add to Flock:
            <input
              type="text"
              name="usernameOfExFriend"
              value={this.state.usernameOrEmailAddress}
              onChange={(e) => this.onChange(e)}
            />

            <button type="submit">Submit</button>

          </form>

          <form id="form5" onSubmit={(e) => this.onCancel(e)}>
            Cancel flock invite:
            <input
              type="text"
              name="usernameOfUnRequestedFriend"
              value={this.state.usernameOrEmailAddress}
              onChange={(e) => this.onChange(e)}
            />

            <button type="submit">Submit</button>

          </form>

        </div>
      </div>
    );
  }
}

MyFlock.propTypes = {
  flockRequest: PropTypes.func.isRequired,
};

export default connect(null, {
  flockRequest,
})(MyFlock);
