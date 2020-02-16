import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class create extends Component {
  render() {
    return (
      <div>
        <form onSubmit={e => this.props.afterSubmiting(e, this.props.history)}>
          <div className="form-group">
            <label>Business Name</label>
            <input
              type="text"
              name="businessName"
              onChange={this.props.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Name of a Person</label>
            <input
              type="text"
              name="personName"
              onChange={this.props.handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Contact</label>
            <input
              type="text"
              name="contactPerson"
              onChange={this.props.handleChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(create);
