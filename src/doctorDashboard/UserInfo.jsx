import React, { useState, useEffect } from "react";
import { Center, Grid, GridItem, Spinner } from "@chakra-ui/react";
import Statistic from "./Statistic.jsx";
// import PendingAppointmets from "./PendingAppointments.jsx";
import PendingAppointments from "./PendingAppointments.jsx";
import ProfileCard from "../reusable/ProfileCard.jsx";
import fetchData from "../hooks/fetchData.jsx";

const UserInfo = () => {
  const [personList, , fetchpersonList] = fetchData([]);
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    fetchpersonList(`doctor`);
  }, []);

  useEffect(() => {
    setSelectedPerson(personList[0]);
  }, [personList]);

  return (
    <Grid
      templateColumns="1fr"
      templateRows="auto auto 1fr"
      gap="16"
      height="full"
      width="ful"
      fontSize="xl"
      color="font.focused"
      bg="bgDarker"
      borderRadius="3xl"
      py="16"
      px="24"
      // overflow="hidden"
      // alignItems="strech"
    >
      <GridItem>
        {selectedPerson ? (
          <ProfileCard
            category="doctor"
            selectedPerson={selectedPerson}
            entity={["Name", "Speciality", "Degrees", "Rating", "Info"]}
            page="doctorDashboard"
          />
        ) : (
          <Center minH="48">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="primary.base"
              size="xl"
            />
          </Center>
        )}
      </GridItem>

      <GridItem>
        <Statistic />
      </GridItem>

      {/* <GridItem>
        <PendingAppointmets />
      </GridItem> */}

      <GridItem overflow="hidden">
        <PendingAppointments />
      </GridItem>
    </Grid>
  );
};

export default UserInfo;