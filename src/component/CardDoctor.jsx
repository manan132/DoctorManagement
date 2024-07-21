import React from "react";
import Card from "react-bootstrap/Card";

const CardDoctor = (val2) => {
  return (
    <div>
      <Card className="card-group">
        <Card.Img className="image" src={val2.imgsrc} />
        <Card.Body className="card-body">
          <Card.Title>{val2.title}</Card.Title>
          <Card.Text>
            <div>{val2.text}</div>
            <hr></hr>
            <div className="card-detail">
              <span>
                <img
                  className="detail-image"
                  src={
                    "https://cdn-icons-png.flaticon.com/512/6596/6596115.png"
                  }
                  alt=""
                />
                <p className="detail-no">{val2.phone}</p>
              </span>
              <span>
                <img
                  className="detail-image"
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TXBR3F7vyvY1vAx1XCxBTjf1L-L_SDWfdUdGFV24yrC3hSI4IvZluCBY9ju3ZvQxSGM&usqp=CAU"
                  }
                  alt=""
                />
                <p className="detail-no">{val2.gmail}</p>
              </span>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardDoctor;
