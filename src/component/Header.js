import React, { useState, useEffect, useContext, useRef } from "react";
import Axios from "axios";
import { AuthContext } from '../context/Auth';
import { DownloadTableExcel } from 'react-export-table-to-excel';

const Header = () => {
  const tableRef = useRef(null);
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser?.uid;

const [ftData, setFTData] = useState({});
  const [average, setAverage] = useState(0);

  useEffect(() => {
    if (currentUser && userId) getFTData();
  }, [currentUser]);

  const getFTData = () => {
    Axios.get(`https://fun-games-c4f99-default-rtdb.firebaseio.com/fingertapping/${userId}.json`)
      .then((response) => {
        const data = response.data || {};
        setFTData(data);
        const grandTotal = Object.values(data).reduce((sum, val) => sum + val.score, 0);
        setAverage(grandTotal / Object.keys(data).length);
      })
      .catch(console.log);
  };

  if (!currentUser) return <div className="p-4">Loading user data...</div>;

  return (
    <div className="row justify-content-start">
      <div className="col-lg-10">
        <div className="border p-4 shadow">
          <div className="d-flex justify-content-between mb-3">
            <h1 className="mb-4">Patient Name: {currentUser.displayName}</h1>
            <DownloadTableExcel
              filename="fingertapping_results"
              sheet="finger_tap"
              currentTableRef={tableRef.current}
            >
              <button className="btn btn-sm btn-success">Export Result</button>
            </DownloadTableExcel>
          </div>
          <table className="table table-striped table-hover table-bordered border-primary" ref={tableRef}>
            <thead>
              <tr>
                <th>Test Type</th>
                <th>Total Score</th>
                <th>Range (Non Autistic)</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Finger Tapping</th>
                <td>{average.toFixed(0)}</td>
                <td>50 - 60</td>
                <td>{average >= 25 ? (
                  <span className="text-success">Healthy</span>
                ) : (
                  <span className="text-danger">Possible Parkinson's</span>
                )}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Header;
