/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/header.jpg") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              // className="n-logo"
              width="18%"
              height="18%"
              src={require("assets/img/now-logo.png")}
            ></img>
            <br />
            <br />
            <h3>A Beautiful Place to Find your Dream Home.</h3>
          </div>
          <h6 className=" category-absolute">
            Builders & Developers{""} | {""} Bangalore{""} | {""}Karnataka
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
