import React, { Component } from "react";

class CounterApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      color: "black",
      users: [
        { id: 1, name: "Lokesh", age: 21 },
        { id: 2, name: "Rahul", age: 22 },
        { id: 3, name: "Anjali", age: 20 },
      ],
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  changeColor = () => {
    const colors = ["red", "blue", "green", "purple", "orange"];
    const random = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ color: random });
  };

  render() {
    const containerStyle = {
      maxWidth: "600px",
      margin: "40px auto",
      padding: "25px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      fontFamily: "Arial",
    };

    const buttonStyle = {
      padding: "10px 18px",
      margin: "10px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
      backgroundColor: "#4CAF50",
      color: "white",
    };

    const tableStyle = {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
    };

    const thStyle = {
      backgroundColor: "#4CAF50",
      color: "white",
      padding: "10px",
    };

    const tdStyle = {
      padding: "10px",
      textAlign: "center",
      borderBottom: "1px solid #ddd",
    };

    return (
      <div style={containerStyle}>
        <h1 style={{ color: this.state.color, textAlign: "center" }}>
          Counter: {this.state.count}
        </h1>

        <div style={{ textAlign: "center" }}>
          <button style={buttonStyle} onClick={this.increment}>
            Increment
          </button>

          <button
            style={{ ...buttonStyle, backgroundColor: "#f44336" }}
            onClick={this.decrement}
          >
            Decrement
          </button>

          <button
            style={{ ...buttonStyle, backgroundColor: "#2196F3" }}
            onClick={this.changeColor}
          >
            Change Color
          </button>
        </div>

        <h2 style={{ textAlign: "center", marginTop: "30px" }}>User List</h2>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Age</th>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td style={tdStyle}>{user.id}</td>
                <td style={tdStyle}>{user.name}</td>
                <td style={tdStyle}>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CounterApp;
