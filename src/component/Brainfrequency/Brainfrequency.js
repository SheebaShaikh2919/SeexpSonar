import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { AuthContext } from '../../context/Auth';

const Brainfrequency = () => {

  const { currentUser } = useContext(AuthContext);
  const [postData, setPostData] = useState("");
  const userId = currentUser.uid;

  useEffect(() => {
    getPostData(currentUser.email);
  }, [currentUser]);

  const getPostData = () => {
    Axios
    .get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/brainfrequency/${userId}.json`)
    .then((response) => {
      setPostData(response.data);
    })
    .catch((error) => console.log(error));
};

  return (
    <div className="row justify-content-start">
      <div className="col-lg-4">
        <div className="border shadow p-4">
          <div className="card-body p-4 p-sm-5 ">
            <form>
              <div className="col-12 form-con d-flex">
                <div class="form-floating mb-3">
                  <input
                    type="number"
                    maxlength="5"
                    class="form-control"
                    id="floatingInput"
                    placeholder="000.0"
                  />
                  <label for="alpha">Alpha</label>
                </div>
              </div>
              <div className="col-12 form-con d-flex">
                <div class="form-floating mb-3">
                  <input
                    type="number"
                    maxlength="5"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="000.0"
                  />
                  <label for="Beta">Beta</label>
                </div>
              </div>
              <div class="col-12 form-con d-flex ">
                <div class="form-floating mb-3">
                  <input
                    type="number"
                    maxlength="5"
                    class="form-control"
                    id="floatingInput"
                    placeholder="000.0"
                  />
                  <label for="alpha">Gamma</label>
                </div>
              </div>
              <div class="col-12 form-con d-flex ">
                <div class="form-floating mb-3">
                  <input
                    type="number"
                    maxlength="5"
                    class="form-control"
                    id="floatingInput"
                    placeholder="000.0"
                  />
                  <label for="alpha">Delta</label>
                </div>
              </div>
              <div class="col-12 form-con d-flex">
                <div class="form-floating mb-3">
                  <input
                    type="number"
                    maxlength="5"
                    class="form-control"
                    id="floatingInput"
                    placeholder="000.0"
                  />
                  <label for="alpha">Thetha</label>
                </div>
              </div>
              <input
                type="button"
                value="Submit"
                className="next-button btn-primary btn"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="border p-4 shadow">
          <h4 className="">Score</h4>

          <table class="table table-striped table-hover table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">
                  <h6>No of Trails</h6>
                </th>
                <th scope="col">
                  <h6>Alpha</h6>
                </th>
                <th scope="col">
                  <h6>Beta</h6>
                </th>
                <th scope="col">
                  <h6>Gamma</h6>
                </th>
                <th scope="col">
                  <h6>Delta</h6>
                </th>
                <th scope="col">
                  <h6>Thetha</h6>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">trail</th>
                <td>0</td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <span className="text-success">Non Autistic</span> /{" "}
                  <span className="text-danger">Autistic</span>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <span className="noTaskAdded p-5">To View Score Play the game</span> */}
        </div>
      </div>
    </div>
  );
};

export default Brainfrequency;
