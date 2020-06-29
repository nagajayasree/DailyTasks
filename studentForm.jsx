import React, { Component } from "react";
import "./InputFields.css";

class InputFields extends Component {
  constructor(props) {
    const entries = [
      {
        name: "Rishi",
        standard: "X",
        section: "2",
        rollno: "34",
        marks: "584",
        percentage: "96",
        grade: "A",
      },
      {
        name: "Akhila",
        standard: "IX",
        section: "1",
        rollno: "16",
        marks: "490",
        percentage: "82",
        grade: "B",
      },
    ];
    super(props);
    this.state = {
      Entries: entries,
      name: "",
      standard: "",
      section: "",
      rollno: "",
      marks: "",
      percentage: "",
      grade: "",
    };
  }

  componentDidMount() {
    console.log(" componentDidMount");
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const Entries = [...this.state.Entries];
    const newArr = [
      {
        name: this.state.name,
        standard: this.state.standard,
        section: this.state.section,
        rollno: this.state.rollno,
        marks: this.state.marks,
        percentage: this.state.percentage,
        grade: this.state.grade,
      },
    ];

    const addEntries = Entries.concat(newArr);
    this.setState({ Entries: addEntries });
    console.log(addEntries);
    // console.log(
    //   "values",
    //   this.state.name,
    //   this.state.standard,
    //   this.state.rollno,
    // );
  };

  handleRefresh = (e) => {
    e.preventDefault();
    this.setState({
      name: "",
      standard: "",
      section: "",
      rollno: "",
      marks: "",
      percentage: "",
      grade: "",
    });
  };

  render() {
    return (
      <form id="stuForm" onSubmit={this.handleSubmit}>
        <div className="container">
          <h1 className="header">Student Information</h1>
          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-3 fdp">
                  <input
                    className="form-control inputfield"
                    type="text"
                    autoComplete="off"
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="col-sm-3 fdp">
                  <input
                    className="form-control inputfield"
                    type="text"
                    autoComplete="off"
                    placeholder="Standard"
                    name="standard"
                    value={this.state.standard}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="col-sm-3 fdp">
                  <input
                    className="form-control inputfield"
                    type="text"
                    autoComplete="off"
                    placeholder="Section"
                    name="section"
                    value={this.state.section}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="col-sm-3 fdp">
                  <input
                    className="form-control inputfield"
                    type="text"
                    autoComplete="off"
                    placeholder="RollNo"
                    name="rollno"
                    value={this.state.rollno}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-2 fdp">
              <input
                className=" form-control inputfield"
                type="text"
                autoComplete="off"
                placeholder="Marks"
                name="marks"
                value={this.state.marks}
                onChange={this.handleChange}
              />
            </div>

            <div className="col-sm-2 fdp">
              <input
                className="form-control inputfield"
                type="text"
                autoComplete="off"
                placeholder="Percentage"
                name="percentage"
                value={this.state.percentage}
                onChange={this.handleChange}
              />
            </div>

            <div className="col-sm-2 fdp">
              <input
                className="form-control inputfield"
                type="text"
                autoComplete="off"
                placeholder="Grade"
                name="grade"
                value={this.state.grade}
                onChange={this.handleChange}
              />
            </div>

            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-6">
                  <div className="btn_1">
                    <button className="subBtn" value="Submit" type="submit">
                      Submit
                    </button>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="btn_2">
                    <button className="refBtn" onClick={this.handleRefresh}>
                      Refresh
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <table className="table table-borderless">
                  <thead>
                    <th>Name</th>
                    <th>Standard</th>
                    <th>Section</th>
                    <th>RollNo</th>
                    <th>Marks</th>
                    <th>Percentage</th>
                    <th>Grade</th>
                  </thead>
                  <tbody>
                    {this.state.Entries.map((e) => {
                      return (
                        <tr key={e.rollno}>
                          <td>{e.name}</td>
                          <td>{e.standard}</td>
                          <td>{e.section}</td>
                          <td>{e.rollno}</td>
                          <td>{e.marks}</td>
                          <td>{e.percentage}</td>
                          <td>{e.grade}</td>
                        </tr>
                      );
                    })}
                    {/* {
                            <tr>
                              <td>{this.state.name}</td>
                              <td>{this.state.standard}</td>
                              <td>{this.state.rollno}</td>
                              <td>{this.state.marks}</td>
                              <td>{this.state.percentage}</td>
                              <td>{this.state.grade}</td>
                            </tr>
                          } */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default InputFields;
