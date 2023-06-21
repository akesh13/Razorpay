import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:8080/api/getKey");
    const {
      data: { order },
    } = await axios.post("http://localhost:8080/api/checkout", {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "oreo",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
      callback_url: "http://localhost:8080/api/paymentverification",
      prefill: {
        name: "oreo",
        email: "oreo@oreo.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#a51ff5",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <Box>
      <Stack
        h={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
        direction={["column", "row"]}
      >
        <Card
          amount={5000}
          img={
            "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1667301359/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/264336_vmlk29.png/mxw_2048,s_webp,f_auto"
          }
          checkoutHandler={checkoutHandler}
        />
        <Card
          amount={3000}
          img={
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8F2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1540596407165"
          }
          checkoutHandler={checkoutHandler}
        />
      </Stack>
    </Box>
  );
};

export default Home;
