import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "./axiosInstance";

const DataEntry = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("https://data-entry-table.vercel.app/api/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const loadEdit = (id) => {
    navigate(`/update/${id}`);
  };
  
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <div className="divbtn mb-3">
            <Link to="/data/create" className="btn btn-success">Add Entry</Link>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="bg-dark text-white">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map(item => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.age}</td>
                      <td>{item.phone}</td>
                      <td>
                        <button onClick={() => loadEdit(item._id)} className="btn btn-success">Edit</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataEntry;
