import React from "react";
import { Card } from "antd";
const Cards = (props) => {
  
  const { Meta } = Card;
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={props.alt} src={props.src} />}
        onClick={props.onClick}
      >
        <Meta title={props.title} description={props.description}  onClick={props.onClick}/>
      </Card>
      ,
    </div>
  );
};

export default Cards;
