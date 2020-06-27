import React, { Component } from "react";
import "./Education.css";

class Education extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <form action="">
              <div className="form-group">
                <label>
                  <div className="row">
                    <div className="col-sm-6">Qualification</div>
                    <div className="col-sm-2">:</div>
                  </div>
                </label>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Sl.No</th>
                      <th>Examination</th>
                      <th>Board</th>
                      <th>Percentage</th>
                      <th>Year Of Passing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Class X</td>
                      <td>
                        <input className="inputs" type="text" />
                      </td>
                      <td>
                        <input className="inputs" type="text" />
                      </td>
                      <td>
                        <input className="inputs" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Class XII</td>
                      <td>
                        <input className="inputs" type="text" />
                      </td>
                      <td>
                        <input className="inputs" type="text" />
                      </td>
                      <td>
                        <input className="inputs" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Graduation</td>
                      <td>
                        <input className="inputs" type="text" />
                      </td>
                      <td>
                        <input className="inputs" type="text" />
                      </td>
                      <td>
                        <input className="inputs" type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Masters</td>
                      <td>
                        <input className="inputs" type="text" />
                      </td>
                      <td>
                        <input className="inputs" type="text" />
                      </td>
                      <td>
                        <input className="inputs" type="text" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <label htmlFor="courses">
                  <div className="row">
                    <div className="col-sm-6">Applying For</div>
                    <div className="col-sm-2">:</div>
                    <div className="col-sm-8">
                      <select name="course" className="form-control">
                        <option>Engineering</option>
                        <option>Medical</option>
                        <option>Agriculture</option>
                      </select>
                    </div>
                  </div>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
