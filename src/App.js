import React, { useState } from "react";
import Header from "./components/header";
import Rules from "./components/rules";
// import Card from "./components/card";
import Footer from "./components/footer";
import Success from "./components/success";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardComponent from "./components/CardComponent";
import { Container, Button } from "react-bootstrap";
import foregroundImage from "./images/Build a thon Text 1.png";

import "./styles.css";


function App() {
  const [teamname, setTeamname] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  // const [name3, setName3] = useState("");
  // const [name4, setName4] = useState("");
  const [url, setUrl] = useState("");
  const [result, setResult] = useState([]);

  // const navigate = useNavigate();

  // const redirectToRoute = (route) => {
  //   navigate(route);
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Teamname: teamname,
      Name1: name1,
      Name2: name2,
      // Name3: name3,
      // Name4: name4,
      url: url,
    };
    try {
      const response = await fetch("https://buildathonserver.onrender.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.log(err);
    }
    //   await axios.post('/submit', { teamname: teamname, name1 : name1, name2:name2, name3:name3, name4:name4, url:url })
    // .then(response => console.log(response.data))
    // .catch(error => console.error('Axios Error:', error));

    window.open("/success", "_self");
  };

  async function fetchData() {
    await fetch("https://buildathonserver.onrender.com/getitems")
      .then((res) => res.json())
      .then((data) => setResult(data))
      .catch((err) => console.log(err));
  }

  function handleInternalLink(link) {
    // window.location.href = link;
    window.open(link, "_self");
  }

  function handleExternalLink(link) {
    // window.location.href = link;
    window.open(link, "_blank");
  }

  return (
    <div className="main">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App gradient-background">
                <div id="homepage">
                  <img
                    className="my-1"
                    src={foregroundImage}
                    alt="Foreground text image"
                  />
                  <div className=" container d-flex justify-content-center text-overlay">
                    <p>"Creating Tomorrow's Solutions Today"</p>
                  </div>
                </div>

                <div className="about container">
                  <h2>About</h2>
                  <p>
                    Welcome to 'BUILD-A-THON 1.0,' a groundbreaking hackathon
                    presented by the Department of Computer Science and Business
                    Systems. As pioneers of the inaugural hacking extravaganza
                    at CIT, we extend a warm greeting to all participants. Your
                    presence is a cornerstone of this event, and we are eagerly
                    anticipative of the exceptional fusion of technology and
                    creativity that you will bring to the forefront. Prepare to
                    unravel your capabilities, redefine innovation, and etch
                    your mark on this hackathon, as we collectively craft an
                    indelible and exhilarating experience for everyone involved!
                  </p>
                </div>

                <Rules />

                <div className="venue container">
                  <p>
                    <span className="font-weight-bold">Venue : </span>Chennai Institute of Technology
                  </p>
                  <p>
                    <span className="font-weight-bold">Organized by : </span>Department of Computer Science and Business Systems
                  </p>
                </div>

                <CardComponent />

                <Container
                  className="d-flex flex-column align-items-center justify-content-center"
                  style={{ height: "30vh" }}
                >
                  <h3 className="mb-4">Submit your idea</h3>
                  {/* <a href="http://localhost:3000/submit"> */}
                    <Button
                      variant="primary"
                      style={{
                        minheight: "10vh",
                        borderRadius: "50px",
                        minwidth: "300px",
                      }}
                      onClick={()=>handleInternalLink("https://forms.gle/1BhEaMditAfgSAX76")}
                    >
                      <h4 className="p-2 pt-3 d-flex align-items-center justify-content-center">Go to submission page</h4>
                    </Button>
                  {/* </a> */}
                </Container>
                {/* <form
                  action="https://forms.gle/sbJBHRCZLy9GZhrE8"
                  target="_blank"
                >
                  <h1>Click Here to Register</h1>
                  <button>Register</button>
                </form> */}
              </div>
            }
          />

          <Route
            path="/submit"
            element={
              <div className="form container ">
                <form onSubmit={handleSubmit}>
                  <div className="teamname m-4">
                    <label for="teamname">Team Name</label>
                    <input
                      id="teamname"
                      name="teamname"
                      type="text"
                      onChange={(e) => setTeamname(e.target.value)}
                      placeholder="Team Name"
                      required
                    />
                  </div>
                  <div className="name m-4">
                    <label for="name1">Team Id</label>
                    <input
                      id="name1"
                      value={name1}
                      type="text"
                      onChange={(e) => setName1(e.target.value)}
                      placeholder="Team Id"
                      required
                    />
                  </div>
                  <div className="name m-4">
                    <label for="name2">Team Leader Name</label>
                    <input
                      id="name2"
                      value={name2}
                      type="text"
                      onChange={(e) => setName2(e.target.value)}
                      placeholder="Team Leader"
                      required
                    />
                  </div>
                  {/* <div className="name m-4">
                    <label for="name3">Team Member 3</label>
                    <input
                      id="name3"
                      value={name3}
                      type="text"
                      onChange={(e) => setName3(e.target.value)}
                      placeholder="Team Member 3"
                      required
                    />
                  </div>
                  <div className="name m-4">
                    <label for="name4">Team Member 4</label>
                    <input
                      id="name4"
                      value={name4}
                      type="text"
                      onChange={(e) => setName4(e.target.value)}
                      placeholder="Team Member 4"
                      required
                    />
                  </div> */}
                  <label for="url">Upload your file link</label>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    class="url"
                    id="url"
                  />
                  <div className="button">
                    <button className="button">Submit</button>
                  </div>
                </form>
              </div>
            }
          />

          <Route
            path="/get_items"
            element={
              <div className="table">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th className="table-header">Team Id</th>
                      <th className="table-header">Team Name</th>
                      <th className="table-header">Team Leader</th>
                      <th className="table-header">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.map((res) => (
                      <tr key={res._id}>
                        <td>{res.Id}</td>
                        <td>{res.Teamname}</td>
                        <td>{res.Leader}</td>
                        <td>
                          <a
                            className="link"
                            href={res.Link}
                            onClick={() => handleExternalLink(res.Link)}
                            target="_blank"
                          >
                            {res.Link}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <button className="fetch-button" onClick={fetchData}>
                  Fetch Data
                </button>
              </div>
            }
          />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
