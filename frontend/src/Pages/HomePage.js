import React from "react";
import { Container, Box, Text } from "@chakra-ui/react";
import Login from "../Components/Auth/Login";
import SignUp from "../Components/Auth/SignUp";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        textAlign="center"
      >
        <Text fontSize="4xl" fontFamily="Work Sans" color="black">
          Vartaalap
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        color="black"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="49%" marginRight="auto">Login</Tab>
            <Tab width="49%">Sign Up</Tab>
          </TabList>
          <TabPanels>
             <TabPanel> <Login/> </TabPanel>
            <TabPanel> <SignUp/>  </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
