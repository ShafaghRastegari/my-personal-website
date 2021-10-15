import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        >
          <i className="fas fa-heart" />
        </a>{" "}
        using <i className="fab fa-react" />
      </Container>
    </footer>
  );
};

export default Footer;
