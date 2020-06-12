import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`;

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`;

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`;

const Excerpt = styled.p`
  margin: 0;
`;

const User = (props) => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
);

export default function UsersList() {
  return (
    <Container>
      <h1>Velkommen til lesesalen!</h1>
      <p>Her har vi det gøy.</p>
      <User
        username="Mathias Bøe"
        avatar="https://avatars3.githubusercontent.com/u/24441871?s=400&u=61744d0fa136d33f5d353fe331de6c33ec945771&v=4"
        excerpt="I'm Mathias Bøe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Christian Hein"
        avatar="https://avatars2.githubusercontent.com/u/31273371?s=400&u=3b43ba9a606335ab8b553f6d66c263462fd174c2&v=4"
        excerpt="I'm Christian Hein, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  );
}
