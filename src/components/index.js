import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
class index extends Component {
  handleNoData = () => {
    if (this.props.businessdata.length === 0) {
      return (
        <tr>
          <td colSpan="4" className="text-center">
            No data!
          </td>
        </tr>
      );
    }
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>business name</th>
              <th>person name</th>
              <th>contact</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.handleNoData()}
            {this.props.businessdata.map((biz, index) => (
              <tr key={index}>
                <td>{biz.business_name}</td>
                <td>{biz.person_name}</td>
                <td>{biz.contact}</td>
                <td>
                  <Link to={`/${biz.id}`} className="btn btn-primary">
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() =>
                      this.props.handleDelete(biz.id, this.props.history)
                    }
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default withRouter(index);
