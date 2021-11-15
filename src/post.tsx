import React from "react";
import styled from "styled-components";

interface INtetApp {
  items: { name: string; city: string }[];
}
const Posts: React.FC<INtetApp> = (props) => {
  const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const UL = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
  `;

  const LI = styled.li`
    list-style: none;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 25px;
  `;

  return (
    <Div className="posts-info">
      {props.items.map((item) => (
        <UL
          key={Math.random().toString()}
          style={{ backgroundColor: "rgba(224, 106, 199, 0.7)" }}
        >
          <LI key={Math.random().toString()}> {item.city} </LI>
          <LI key={Math.random().toString()}>{item.name}</LI>
        </UL>
      ))}
    </Div>
  );
};
export default Posts;
