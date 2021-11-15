import React, { useState, useEffect } from "react";
import styled from "styled-components";
import image1 from "./image.jpg";
import Posts from "./post";
import Users from "./user";
import { createGlobalStyle } from "styled-components";

const App: React.FC = () => {
  const [Texts, setTexts] = useState([]);
  const [User, setUser] = useState([]);
  const [Boole, setBoole] = useState(false);

  useEffect(() => {
    async function FetchData() {
      const FetchA = await fetch("https://jsonplaceholder.typicode.com/todos");

      const res = await FetchA.json();
      return res;
    }

    FetchData().then((data) => setTexts(data));
    async function FetchData1() {
      const FetchA1 = await fetch(
        "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8"
      );

      const res1 = await FetchA1.json();
      return res1;
    }

    FetchData1().then((data) => setUser(data));
  }, []);
  const Header = styled.header`
    font-size: 30px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
    margin-top: 20px;
  `;
  const GlobalStyle = createGlobalStyle`
  body {
 background:url(${image1});
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  }

`;
  const Button = styled.button`
    font-size: 35px;
    background: pink;
    border: 0px;
    border-radius: 25px;
    padding: 20px;
    &:hover {
      background: rgba(224, 106, 199, 0.8);
      border: 1px solid black;

      font-size: 35px;

      border-radius: 25px;
      padding: 20px;
    }
  `;

  return (
    <div className="App">
      <Header className="App-header">
        <Button onClick={() => setBoole(true)}>n1</Button>
        <Button onClick={() => setBoole(false)}>n2</Button>
      </Header>
      <GlobalStyle />
      {Boole && <Posts items={User} />}
      {!Boole && <Users items={Texts} />}
    </div>
  );
};

export default App;
