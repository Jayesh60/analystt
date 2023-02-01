import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./feed.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Collapse from "react-bootstrap/Collapse";

function Feed() {
  const [details, getDetails] = useState([]);
  const [accordion, setAccordion] = useState(-1);

  useEffect(() => {
    getDetailss();
  }, []);

  const getDetailss = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      getDetails(res.data);
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  function toggle(index) {
    if (accordion === index) {
      setAccordion(-1);
      return;
    }
    setAccordion(index);
    console.log(accordion);
  }

  return (
    <div>
      <div className="card_container">
        {details.map((data, index) => (
          <Card className="cart_items" key={index}>
            <Card.Header>
              <h5>Company : {data.company.name} </h5>
              <p>{data.company.catchPhrase} </p>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                <h5>Contact :</h5>
              </Card.Title>
              <Card.Text className="contact_item">
                <p>Name : {data.name}</p>
                <p>Email : {data.email}</p>
                <p>Phone : {data.phone}</p>
                <p>City : {data.address.city}</p>
              </Card.Text>
            </Card.Body>
            <div className="btmContainer">
              <Collapse>
                <div
                  className={
                    accordion === index ? "active moreDetails" : "moreDetails"
                  }
                >
                  <div className="detailedContainer" id="example-collapse-text">
                    <div className="top">
                      <h6>Company Details : </h6>
                      <p>{data.company.name}</p>
                      <p>{data.company.catchPhrase}</p>
                      <p>{data.company.bs}</p>
                    </div>
                    <div className="bottom">
                      <h6>Address : </h6>
                      <p>
                        {data.address.street}
                        {data.address.suite} {data.address.city}
                        {data.address.zipcode}
                      </p>
                      <p>
                        Website : <a>{data.website}</a>
                      </p>
                    </div>
                  </div>
                </div>
              </Collapse>
              <div className="button">
                {accordion === index ? (
                  <>
                    <Button onClick={() => toggle(index)}>Hide</Button>
                  </>
                ) : (
                  <>
                    <Button onClick={() => toggle(index)}>Details</Button>
                  </>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Feed;
