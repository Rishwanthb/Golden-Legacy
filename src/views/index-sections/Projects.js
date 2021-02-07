import React, { useEffect } from "react";
import firebase from "../../components/Firebase/firebase.js";
import "../../assets/css/custom.css";
import ImageGallery from "react-image-gallery";
import GoogleMapReact from "google-map-react";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Modal,
  ModalBody,
  Button,
} from "reactstrap";

// core components
function Projects() {
  const [propertieieslist, setPropertieieslist] = React.useState([]);
  const [modal1, setModal1] = React.useState(false);
  const [selectedproperty, setSelectedProperty] = React.useState([]);

  const AnyReactComponent = ({ text }) => (
    <div>
      {text}
      <span style={{ fontSize: "25px", color: "Tomato" }}>
        <i className="fas fa-map-marker-alt"></i>
      </span>
    </div>
  );

  const defaultlocation = {
    center: {
      lat: 12.9287,
      lng: 77.551093,
    },
    zoom: 11,
  };

  useEffect(() => {
    const projectref = firebase.database().ref("properties");
    projectref.on("value", (snapshot) => {
      const properties = snapshot.val();
      const propertieieslist = [];
      for (let id in properties) {
        propertieieslist.push(properties[id]);
      }
      setPropertieieslist(propertieieslist);
    });
  }, []);

  function selectproperty(index) {
    setModal1(true);
    setSelectedProperty([propertieieslist[index]]);
  }

  return (
    <>
      <div
        className="section"
        id="projects"
        style={{
          backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
          // minHeight: "10px",
        }}
      >
        <Modal
          size="lg"
          style={{
            maxWidth: "95%",
            width: "100%",
          }}
          isOpen={modal1}
          toggle={() => setModal1(false)}
        >
          {selectedproperty.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage:
                  "url(" + require("assets/img/frame3.jpg") + ")",
                backgroundSize: "cover",
                backgroundPosition: "top center",
                minHeight: "50px",
              }}
            >
              <div className="modal-header justify-content-center">
                <div className="justify-content-left">
                  <img
                    src={require("assets/img/now-logo.png")}
                    width="10%"
                    height="10%"
                    alt="Logo"
                  ></img>
                  <h4 className="title title-up">{item.property_name}</h4>
                  <b>
                    <i className="fa fa-compass" aria-hidden="true"></i>
                    &nbsp;&nbsp;{item.location} &nbsp; |&nbsp;{" "}
                    {item.full_address}
                  </b>
                </div>

                <button
                  className="close"
                  type="button"
                  onClick={() => setModal1(false)}
                >
                  <i className="now-ui-icons ui-1_simple-remove"></i>
                </button>
              </div>
              <ModalBody
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/frame3.jpg") + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  minHeight: "50px",
                }}
              >
                <Row>
                  <Col className="ml-auto mr-auto" md="9" xl="9">
                    <ImageGallery items={item.images} />
                  </Col>
                  <Col className="ml-auto mr-auto" md="3" xl="3">
                    {" "}
                    <Card body outline color="warning">
                      <CardBody>
                        <b>Ammenities: </b>
                        <br />
                        {item.ammenities.map((subitem, i) => {
                          return <li>{subitem}</li>;
                        })}
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col className="ml-auto mr-auto" md="7" xl="7F">
                    <b>Overview:</b> {item.overview}
                    <br />
                    <br />
                    <b>Near By:</b> {item.near_to}
                  </Col>
                  <Col className="ml-auto mr-auto" md="" xl="5">
                    <div style={{ height: "50vh", width: "100%" }}>
                      <GoogleMapReact
                        bootstrapURLKeys={{
                          key: "AIzaSyD2lzZNnUK952HlAL2nph-3b0bZfaU5JK4",
                        }}
                        defaultCenter={defaultlocation.center}
                        // defaultCenter={{
                        //   lat: item.geolocation.lat,
                        //   lng: item.geolocation.lng,
                        // }}
                        defaultZoom={defaultlocation.zoom}
                        yesIWantToUseGoogleMapApiInternals
                      >
                        <AnyReactComponent
                          lat={item.geolocation.lat}
                          lng={item.geolocation.lng}
                          text={item.geolocation.text}
                        />
                      </GoogleMapReact>
                    </div>
                  </Col>
                </Row>
              </ModalBody>
              <div
                className="modal-footer"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/frame3.jpg") + ")",
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  minHeight: "50px",
                }}
              >
                <Button
                  className="justify-content-right"
                  color="info"
                  type="button"
                  onClick={() => setModal1(false)}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          ))}
        </Modal>
        <Container>
          <div className="typography-line">
            <h3
              style={{
                color: "#000033",
              }}
            >
              Our Projects
            </h3>
          </div>
          <Row>
            {propertieieslist.map((properties, index) => (
              <Col className="ml-auto mr-auto" md="4" xl="4">
                <Card
                  key={index}
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/frame3.jpg") + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    minHeight: "100px",
                  }}
                >
                  <CardHeader>
                    <ImageGallery
                      showPlayButton={false}
                      showFullscreenButton={false}
                      items={properties.images}
                      showThumbnails={false}
                      showNav={false}
                      showBullets={true}
                      slideDuration={200}
                      autoPlay={true}
                    />
                  </CardHeader>
                  <CardBody>
                    <h4
                      style={{
                        color: "#000033",
                      }}
                    >
                      <b>{properties.property_name}</b>
                    </h4>

                    <div
                      style={{
                        color: "#000033",
                      }}
                    >
                      <b>
                        <i className="fa fa-compass" aria-hidden="true"></i>
                        &nbsp;&nbsp;{properties.full_address}|
                        {properties.location}
                      </b>
                      <br />
                      {properties.overview}
                    </div>

                    <br />
                    <div className="text-right">
                      <Button
                        className="btn-link"
                        color="info"
                        onClick={() => selectproperty(index)}
                      >
                        <b>More Details</b>
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Projects;
