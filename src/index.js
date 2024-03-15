import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index1.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1> Pizza React APP .co</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our MENU</h2>
      <ul className="pizzas">
        {pizzaData.map((value) => {
          return <Pizza value={value} />;
        })}
      </ul>
    </main>
  );
}
function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.value.photoName} alt="pizza spinachi " />
      <div>
        <h3>{props.value.name}</h3>
        <p>{props.value.ingredients}</p>
        <span>{props.value.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const open = 12;
  const close = 22;
  const isOpen = hour >= open && hour <= close;

  return (
    <footer className="footer">
      {isOpen ? "We're currently open" : "ComeBack later we are closed"}
      <p style={{ textAlign: "center" }}>{new Date().toLocaleTimeString()}</p>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
