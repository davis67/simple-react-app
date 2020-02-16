import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Edit extends Component {
  state = {
    id: "",
    businessName: "", // kampabitd
    personName: "",
    contactPerson: ""
  };
  componentDidMount() {
    let singleBiz = this.props.businessdata.find(
      obj => obj.id === this.props.match.params.id
    );

    this.setState({
      id: this.props.match.params.id,
      businessName: singleBiz.business_name,
      personName: singleBiz.person_name,
      contactPerson: singleBiz.contact
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form
          onSubmit={e =>
            this.props.handleUpdate(e, this.state, this.props.history)
          }
        >
          <div className="form-group">
            <label>Business Name</label>
            <input
              type="text"
              name="businessName"
              onChange={this.handleChange}
              value={this.state.businessName}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Name of a Person</label>
            <input
              type="text"
              name="personName"
              onChange={this.handleChange}
              className="form-control"
              value={this.state.personName}
            />
          </div>
          <div className="form-group">
            <label>Contact</label>
            <input
              type="text"
              name="contactPerson"
              onChange={this.handleChange}
              className="form-control"
              value={this.state.contactPerson}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Edit);
