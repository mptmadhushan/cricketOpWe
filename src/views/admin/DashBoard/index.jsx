import React, { useEffect } from 'react'

// Chakra imports
import { Box, Button,Select, Flex, Grid, Link, Input, Text, useColorModeValue, SimpleGrid, Heading } from '@chakra-ui/react'
import Card from 'components/card/Card.js'
import axios from 'axios'
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import MiniCalendar from "components/calendar/MiniCalendar";
import CheckTable from "views/admin/default/components/CheckTable";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white')
  const textColorBrand = useColorModeValue('brand.500', 'white')
  const [ourTeam, setOurTeam] = React.useState(null);
  const [thereTeam, setThereTeam] = React.useState(null);

  const [respo, setRespo] = React.useState()

  useEffect(() => {
    
  }, [])



  const handleOnSubmit = () => {
    const data ={
        "team" : value,
        "opposition" : value2
    }
    console.log(data);
    axios
      .post(
        "http://127.0.0.1:5000/winner",
        {
          data
        }
      )
      .then((response) => {
        console.log(
          "🚀 ~ file: testimonials.jsx:15 ~ .then ~ response:",
          response
        );
        setRespo(response)
        
        // setResponse(response.data);
      });
  };

  const [team, setTeam] = React.useState([
    {
      label: "Sri Lanka ...",
      value: "SL"
    },
    {
      label: "Bangaladesh",
      value: "BAN"
    },
    { label: "India", value: "IND" },
    { label: "Australia", value: "AUS" },
    { label: "Pakistan", value: "PAK" },
    { label: "New Zealand", value: "NZ" },
    { label: "West Indies", value: "WI" },
    { label: "Kenya", value: "KENYA" },
  ]);;
  const [team2, tetTeam2] = React.useState([
    {
      label: "Sri Lanka ...",
      value: "SL"
    },
    {
      label: "Bangaladesh",
      value: "BAN"
    },
    { label: "India", value: "IND" },
    { label: "Australia", value: "AUS" },
    { label: "Pakistan", value: "PAK" },
    { label: "New Zealand", value: "NZ" },
    { label: "West Indies", value: "WI" },
    { label: "Kenya", value: "KENYA" },
  ]);;

  // set dropdown value and have initial of none
  const [value, setValue] = React.useState("LK");
  const [value2, setValue2] = React.useState("LK");
  const [resp, setResp] = React.useState("");

  const test = () => console.log("select value", value,value2);

  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      {/* Main Fields */}
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr 0.46fr' }}
        gap={{ base: '20px', xl: '20px' }}
        display={{ base: 'block', xl: 'grid' }}
      >
        <Flex gridArea={{ xl: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2Flex flexDirection="row"' }}>
          <Card align="center" direction="column" w="50%">
          <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">Select your team</Text>
          <Select value={value} onChange={(e) => setValue(e.currentTarget.value)}>
        {team.map((character) => (
          <option key={character.value} value={character.value}>
            {character.label}
          </option>
        ))}
      </Select>

            {/* <Box h="240px" mt="auto"></Box> */}
          </Card>
          <Card align="center" direction="column" w="50%">
            <Text color={textColor} fontSize="2xl" ms="24px" fontWeight="700">
              Select opposition team
            </Text>
            <Select value={value2} onChange={(e) => setValue2(e.currentTarget.value)}>
        {team2.map((character) => (
          <option key={character.value2} value={character.value2}>
            {character.label}
          </option>
        ))}
      </Select>
            {/* <Box h="240px" mt="auto"></Box> */}
          </Card>
          
       </Flex>
        
      </Grid>
      <Flex flexDirection="row" gridArea={{  }}>
      <Button
            fontSize="sm"
            me="0px"
            mb="26px"
            py="15px"
            h="50px"
            borderRadius="16px"
            onClick={()=>handleOnSubmit()}
            fontWeight="500"

          >
            
           SUBMIT
          </Button>
          <Button
          disabled
            fontSize="sm"
            me="0px"
            mb="26px"
            py="15px"
            h="50px"
            borderRadius="16px"
            onClick={handleOnSubmit}
            fontWeight="500"

          >
            
           {resp}
          </Button>
          </Flex>
      <Grid
        mb="20px"
        gridTemplateColumns={{ xl: 'repeat(3, 1fr)', '2xl': '1fr 0.46fr' }}
        gap={{ base: '20px', xl: '20px' }}
        display={{ base: 'block', xl: 'grid' }}
      >
        <Flex flexDirection="row" gridArea={{  }}>
          <Card align="center" direction="column" w="80%">
          <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
          </Card>
          <Card align="center" direction="column" w="50%">
          <MiniCalendar h='100%' minW='100%' selectRange={false} />
          </Card>

       </Flex>
        
      </Grid>
      
    </Box>
  )
}
