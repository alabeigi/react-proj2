import React from "react";
import styled from "styled-components";

interface INtetApp {
  items: { userId: number; id: number; title: string; completed: boolean }[];
}
const Users: React.FC<INtetApp> = (props) => {
  const colors = [
    "rgba(226, 106, 106, 1)",
    "rgba(224, 130, 131, 1)",
    "rgba(241, 169, 160, 1)",
    "rgba(241, 130, 141,1)",
    "rgba(241, 169, 160, 1)",
  ];
  const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `;
  const Ul = styled.ul`
    border-radius: 20px;
    width: 80%;
  `;
  const Lis = styled.li`
    list-style: none;
    padding: 10px;
    margin-bottom: 10px;
  `;
  return (
    <Box className="user-info">
      {props.items.map((item) => (
        <Ul
          style={{
            backgroundColor: colors[Math.round(Math.random() * 4)],
          }}
          key={item.id.toString()}
        >
          <Lis key={item.id.toString()}> {item.title} </Lis>
        </Ul>
      ))}
    </Box>
  );
};
export default Users;
