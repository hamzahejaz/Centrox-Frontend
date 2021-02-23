import React, { useState, useEffect } from "react";
import Props from "../Compnents/Props/Pops";
import Card from "../Compnents/Cards/Card";
import { Row, Col } from "antd";
// import {Price} from "../Api/Api"
import Drawer from "../Compnents/Drawer/Drawer";
import Axios from "axios";

const Page = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [longi, setlongi] = useState("");
  const [lati, setlati] = useState("");
  const [data, setdata] = useState("");
  var dat = JSON.parse(localStorage.getItem("data"));
  const [check, setcheck] = useState("");
  let filteredData = [];

  useEffect(() => {
    Axios.get("http://localhost:4000/User/Estate").then((res) => {
      setdata(res.data);

      localStorage.setItem(
        "data",
        JSON.stringify({
          data: res.data,
        }),
      );
      console.log(res.data);
    });
  }, []);
  // const handleMin =(value) =>{
  //   console.log(value)
  // }
  // const handleMax =() =>{
  //   console.log()
  // }
  const handleClick = (a, b) => {
    setlongi(a);
    setlati(b);
    setTimeout(() => {
      setIsDrawerVisible(true);
    }, 1000);
  };
  const handleClose = () => {
    setIsDrawerVisible(false);
  };

  const onChange = (checkedValues) => {
    console.log(checkedValues.price);
    setcheck(checkedValues);
    if (check != null) {
     
      let filteredData = dat.data.filter(
        (item) =>

          checkedValues.includes(item.amenities) ||
          checkedValues.includes(item.view) ||
          checkedValues.includes(item.stories)||
          checkedValues.includes(parseInt(item.price)) 

      );
      if (filteredData.length > 0) {
        setdata(filteredData);
      } else {
        alert("No Result Found");
      }
      console.log("filteredData  ", filteredData);
     
      
    }
   
  };
console.log("Checkd values are ",check)
  const Main = (checkedValues) => {
    
    setcheck(checkedValues);
    if (check != null) {
      // console.log("dat  ", dat);
      // console.log("check  ", checkedValues);
      let filteredData = dat.data.filter(
        (item) =>
          checkedValues.includes(item.seller) ||
          checkedValues.includes(item.closed) ||
          checkedValues.includes(item.condition),
      );
      if (filteredData.length > 0) {
        setdata(filteredData);
      } else {
        alert("No Result Found");
      }
      console.log("filteredData  ", filteredData);
    }
  };

  const [menu] = useState({
    main: [
      {
        type: "Nav",

        Header: <h2> Zillow</h2>,
        Headers: [
          {
            type: "Menu",

            color: "white",
            label: "For Sale",

            onChange: Main,
            data: [
              { value: "dealer", label: "By-Agent" },
              { value: "owner", label: "By-Owner" },
              { value: "auction", label: "Auction" },
              { value: "new", label: "New-Construction" },
              { value: "Foreclosed", label: "Foreclosed" },
              { value: "Pre-Foreclosed", label: "Pre-Foreclosed" },
            ],
          },
          {
            type: "Dropdown",
            color:"white",
            label:"New-Filter",
            data:[
              { value:'New' ,label:"New Deal"},
              { value:'Old' ,label:"Old Deal"}
            ]
          },
          {
            type: "Dropdown",
            name: "country",
            color: "white",
            label: "More",
            placeholder: "Number of Stories",
            holders: "Other-Amenities",
            holder: "View",
            onChange: onChange,
            dat: [{ value: "one", label: "Single-story Only" }],
            data: [
              { value: "A/C", label: "Must have A/C" },
              { value: "Pool", label: "Must have Pool" },
              { value: "WaterFront", label: "WaterFront" },
            ],
            sub: [
              { value: "Mountain", label: "Mountain" },
              { value: "City", label: "City" },
              { value: "Park", label: "Park" },
              { value: "Water", label: "Water" },
            ],
          },
          {
            type: "Dropdown",
            name: "country",
            color: "white",
            label: "Price",
            placeholder: "Price Range",
            
            onChange: onChange,
            // input:[
            //   {
            //     default:"min",
            //     onChange:handleMin,
            //   },
            //   {
            //     default:"max",
            //     onChange:handleMax,

            //   }
            // ],
            meta: [
              { value: 100, label: "100k+" },
              { value: 200, label: "200k+" },
              { value: 300, label: "300k+" },
              { value: 400, label: "400k+" },
              { value: 500, label: "500k+" },
              { value: 600, label: "600k+" },
              { value: 700, label: "700k+" },
              { value: 800, label: "800k+" },
            ],
          },
        ],
      },
    ],
  });

  return (
    <div>
      <Props print={menu.main} />

      <Row style={{ marginTop: "18px" }} gutter={32}>
        {" "}
        {data
          ? data.map((item, key) => (
              <Col span={6}>
                <Card
                  img
                  alt="example"
                  src="https://www.thehousedesigners.com/house-plans/images/AdvSearch2-7263.jpg"
                  title={<h2>Status: {item.status}</h2>}
                  description={
                    <h3>
                      Sold By: {item.seller}{" "}
                      <h5>
                        Price: {item.price}
                        <br />
                        Condition: {item.condition}
                        <br />
                        Bedrooms: {item.bedrooms}
                        <br />
                        Amenities: {item.amenities}
                        <br />
                        View: {item.view}
                        <br />
                        Stories: {item.stories}
                        <h5
                          onClick={() => {
                            handleClick(item.longi, item.lati);
                          }}
                        >
                          {" "}
                          Click here to See Location{" "}
                        </h5>
                      </h5>
                    </h3>
                  }
                  top="25px"
                ></Card>
              </Col>
            ))
          : filteredData}
      </Row>
      <Drawer
        onClose={handleClose}
        visible={isDrawerVisible}
        longi={longi}
        lati={lati}
      ></Drawer>
    </div>
  );
};

export default Page;
