import React, {useEffect, useState} from "react";
import {DataGrid} from "@material-ui/data-grid";
import "./NameList.css";

const columns = [
  {field: "name", headerName: "Name", width: 200},
  {field: "amount", headerName: "Amount", width: 150, type: "number"}
];
const NameList: React.FC = (): JSX.Element => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("data/names.json", {
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      let names = response["names"];
      for (let i = 0; i < names.length; i++) {
        names[i].id = i;
      }
      setData(response["names"]);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <p>
          Total: {data.map((item) => item["amount"]).reduce((a, b) => a+b, 0)}
        </p>
      </div>
      <div style={{display: "flex", width: "100%", maxWidth: "1200px", height: "inherit", flexDirection: "column"}}>
        <div style={{flexGrow: 1}}>
          <DataGrid columns={columns} rows={data} autoHeight/>
        </div>
      </div>
    </>

  );
};

export default NameList;