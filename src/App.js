import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import Chance from "chance";
import Create from "./components/create";
import Index from "./components/index";
import Edit from "./components/edit";

class App extends Component {
  state = {
    id: "",
    businessName: "", // kampabitd
    personName: "",
    contactPerson: "",
    business: []
  };

  handleChange = e => {
    // console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleBizChange = e => {
    this.setState({
      businessName: e.target.value
    });
  };
  handleSubmit = (e, history) => {
    e.preventDefault(); //prevent reloading
    let randomNumber = new Chance();
    const obj = {
      id: randomNumber.guid(),
      person_name: this.state.personName,
      business_name: this.state.businessName,
      contact: this.state.contactPerson
    };
    let newupdatedBusiness = [...this.state.business, obj];
    this.setState({
      business: newupdatedBusiness
    });
    history.push("/crud/index");
  };
  handleUpdate = (e, obj, history) => {
    e.preventDefault(); //prevent reloading
    const newobj = {
      id: obj.id,
      person_name: obj.personName,
      business_name: obj.businessName,
      contact: obj.contactPerson
    };
    let newupdatedBusiness = this.state.business.filter(
      obj => obj.id !== newobj.id
    );

    let finalBiz = [...newupdatedBusiness, newobj];
    this.setState({
      business: finalBiz
    });

    history.push("/crud/index");
  };

  handleDelete = (id, history) => {
    let newupdatedBusiness = this.state.business.filter(obj => obj.id !== id);

    this.setState({
      business: newupdatedBusiness
    });
    history.push("/crud/index");
  };
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="nav">
            <Link className="nav-link" to="/crud/index">
              Home
            </Link>
            <Link className="nav-link active" to="/crud/create">
              create
            </Link>
          </nav>
          <h2> React Crud tutorial</h2>
          <Switch>
            <Route path="/crud/create">
              <Create
                afterSubmiting={this.handleSubmit}
                handleChange={this.handleChange}
              />
            </Route>
            <Route exact path="/crud/index">
              <Index
                handleDelete={this.handleDelete}
                businessdata={this.state.business}
              />
            </Route>
            <Route
              path="/:id"
              children={
                <Edit
                  newState={this.state}
                  handleUpdate={this.handleUpdate}
                  businessdata={this.state.business}
                />
              }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withRouter(App);
