import React from "react";
import { styled } from "@mui/material/styles";
import { Flex } from "@adobe/react-spectrum";
import { View } from "@adobe/react-spectrum";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Img = styled("img")({
  width: "50px",
  height: "50px",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function SearchList(props) {
  const click = (e) => {
    // console.log(e.target.value);
    props.setInputText(e);
    props.setclose(false);

    // this.props.handlePractice(e.target.value);
  };

  let products = JSON.parse(localStorage.getItem("products"));
  //create a new array by filtering the original array
  const filteredData = products.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return null;
    }
    //return the item which contains the user input
    else {
      return el.name.toLowerCase().includes(props.input);
    }
  });

  return (
    <>
      {props.close && (
        <ul
          style={{
            position: "absolute",
            listStyleType: "none",
            background: "white",
            width: "25.5ch",
          }}
        >
          {filteredData.map((item) => (
            <li
              key={item.id}
              onClick={() => click(item.name)}
              style={{ width: "25.5ch" }}
            >
              <Flex direction="row" height="size-800" gap="size-100">
                <View backgroundColor="celery-600" width="size-800">
                  <Img src={item.picture} alt="Logo" />
                </View>
                <View backgroundColor="celery-600" width="size-800">
                  <div>{item.name}</div>
                </View>
              </Flex>
              <NavDropdown.Divider />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default SearchList;
