import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";

const PayemtSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const refrenceNum = searchQuery.get("reference");
  return (
    <Box>
      <VStack h="100vh" justifyContent={"center"}>
        <Heading textTransform={"uppercase"}>Order successfull</Heading>
        <Text>Refrence No : {refrenceNum}</Text>
      </VStack>
    </Box>
  );
};

export default PayemtSuccess;
