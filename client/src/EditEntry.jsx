import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "./axiosInstance";

const EditEntry = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`http://localhost:4000/api/data/${id}`);
        const { name, email, age, phone } = response.data;
        setName(name);
        setEmail(email);
        setAge(age);
        setPhone(phone);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`http://localhost:4000/api/data/${id}`, { name, email, age, phone });
      navigate("/");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-body">
                <h2 className="mb-4 text-center">Edit Entry</h2>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Age</label>
                  <input
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="btn-container">
                  <button className="btn btn-success mr-2" type="submit">Save</button>
                  <Link to="/" className="btn btn-danger">Back</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditEntry;
