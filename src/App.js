import Weather from "./Weather"
import './App.css';

export default function App() {
  return (
    <div className="App mx-auto my-5"><div className="container">

    <Weather cityName="Sydney"/>
      <footer className="footer m-2">
        <p>
          Coded with love by{" "}
          <a
            href="https://www.linkedin.com/in/eva-nagengast-9b78b220a"
            className="contactlink"
            title="personal linkedin profile"
            target="_blank"
            rel="noreferrer"
          >
            Eva Nagengast
          </a>{" "}
          | This project is open sourced on{" "}
          <a
            href="https://github.com/EvaNagengast/reactweather-bootstrap"
            className="gitHub"
            title="Git hub contact"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </p>
      </footer></div>
    </div>
  );
}


