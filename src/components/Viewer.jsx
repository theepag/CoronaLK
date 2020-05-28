import React from "react";
class Viewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://www.hpb.health.gov.lk/api/get-current-statistical")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div style={{ textAlign: "center", marginTop: 100 }}>
            <h1> Covid Sri Lanka </h1> <br />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/765px-SARS-CoV-2_without_background.png"
              height="150"
            ></img>
          </div>
          <br />
          <div class="container">
            <div class="row" style={{ fontSize: 27 }}>
              <div class="col-sm">
                Total confirmed cases <br />
                {items.local_total_cases}
              </div>
              <div class="col-sm">
                Deaths <br />
                <span style={{ color: "red" }}>{items.local_deaths}</span>
              </div>
              <div class="col-sm">
                Recovered & Discharged
                <br />
                <span style={{ color: "green" }}>{items.local_recovered} </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default Viewer;
