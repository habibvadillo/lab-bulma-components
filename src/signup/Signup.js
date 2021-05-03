import "bulma/css/bulma.css";
import React from "react";
import Container from "../container/Container";
import Navbar from "../navbar/Navbar";
import Message from "../message/Message";
import CoolButton from "../coolbutton/CoolButton";
import FormField from "../formfield/FormField";

const Signup = (props) => {
  return (
    <Container>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton isSmall isDanger isRounded className="my-class">
        Button 1
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Button 2
      </CoolButton>
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </Container>
  );
};

export default Signup;
