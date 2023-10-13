import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <h3> There are two ways of displaying Data</h3>
      <div>
        1 .<Link to="json"> Click to view using JSON</Link>
      </div>
      <br />
      <br />

      <div>
        2 .<Link to="list"> Click to view using LIST</Link>
      </div>
    </div>
  );
}

export default Home;
