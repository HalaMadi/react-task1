import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [visibility, setVisibility] = useState(false);
  const Increase = () => {
    setCounter(counter + 1);
  };
  const product = {
    name: "iPhone 14",
    price: "$ 1200",
    Description: "A premium smartphone with advance features",
  };
  const showProduct = () => {
    setVisibility(!visibility);
  };
  return (
    <>
      <div className="container text-center" style={{ marginTop: "30px" }}>
        <h1 style={{ margin: "10px" }}>Task 1</h1>
        <hr />
        <div
          style={{
            border: "1px solid #f9f9f9",
            width: "50%",
            margin: "30px auto",
            padding: "20px",
            boxShadow: "8px",
          }}
          className="shadow p-3 mb-5 bg-body-tertiary rounded"
        >
          <button className="btn btn-success" onClick={Increase}>
            Increase
          </button>
          <h2 style={{ fontSize: "32px", margin: "20px 0" }}>
            Counter is {counter}
          </h2>
        </div>
        <div
          style={{
            margin: "auto",
            width: "55%",
            padding: "20px",
            border: "1px solid #ddd",
          }}
          className="shadow p-3 mb-5 bg-body-tertiary rounded"
        >
          <button
            className="btn"
            style={{
              backgroundColor: visibility ? "#dc3545" : "#198754",
              color: "#fff",
            }}
            onClick={showProduct}
          >
            {visibility ? "Hide Product" : "Show Product"}
          </button>
          {visibility && (
            <div style={{ textAlign: "left" }}>
              <p style={{ fontSize: "20px" }}>
                <strong>Name</strong>: {product.name}
              </p>
              <p style={{ fontSize: "20px" }}>
                <strong>Price</strong>: {product.price}
              </p>
              <p style={{ fontSize: "20px" }}>
                <strong>Description</strong>: {product.Description}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
