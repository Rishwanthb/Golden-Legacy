import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Tabs() {
  const [iconPills, setIconPills] = React.useState("1");
  return (
    <>
      <div
        className="section "
        style={{
          backgroundImage: "url(" + require("assets/img/frame.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          // minHeight: "10px",
        }}
      >
        {/* <div className="section section-tabs"> */}
        <Container>
          <div className="typography-line">
            <h3
              style={{
                color: "#FFD700",
              }}
            >
              Hello from Golden Legacy!
            </h3>
          </div>
          <Row>
            <Col className="ml-auto mr-auto" md="12" xl="12">
              <Card>
                <CardHeader>
                  <Nav className="justify-content-center" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={iconPills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("1");
                        }}
                      >
                        <i className="fa fa-id-card" aria-hidden="true"></i>
                        &nbsp;&nbsp;Know us
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("2");
                        }}
                      >
                        <i className="fa fa-eye" aria-hidden="true"></i>
                        &nbsp;&nbsp;Vision
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("3");
                        }}
                      >
                        <i className="fa fa-bullseye" aria-hidden="true"></i>
                        &nbsp;&nbsp;Mission
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={iconPills === "4" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setIconPills("4");
                        }}
                      >
                        <i className="fa fa-users" aria-hidden="true"></i>
                        &nbsp;&nbsp;Our Team
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    className="text-center"
                    activeTab={"iconPills" + iconPills}
                  >
                    <TabPane tabId="iconPills1">
                      <Row>
                        <Col className="ml-auto mr-auto" md="3" xl="3">
                          <img
                            alt="..."
                            className="img-raised"
                            src={require("assets/img/knowus.jpg")}
                            width="100%"
                            height="100%"
                          ></img>
                        </Col>
                        <Col className="ml-auto mr-auto" md="9" xl="9">
                          <p>
                            I think that’s a responsibility that I have, to push
                            possibilities, to show people, this is the level
                            that things could be at. So when you get something
                            that has the name Kanye West on it, it’s supposed to
                            be pushing the furthest possibilities. I will be the
                            leader of a company that ends up being worth
                            billions of dollars, because I got the answers. I
                            understand culture. I am the nucleus.
                          </p>
                        </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="iconPills2">
                      <p>
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus. I think that’s a
                        responsibility that I have, to push possibilities, to
                        show people, this is the level that things could be at.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills3">
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    </TabPane>
                    <TabPane tabId="iconPills4">
                      <p>
                        "I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus. I think that’s a
                        responsibility that I have, to push possibilities, to
                        show people, this is the level that things could be at."
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* </div> */}
      </div>
    </>
  );
}

export default Tabs;
