import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";


const CrimeStatistics = (props) => {
    const crimes = props.crimes;
    const screenWidth = Dimensions.get("window").width;


    var numOfAllCrime = crimes.filter(function(item){ return item.category === "all-crime"; }).length;
    var numOfAntiSocialBehaviour = crimes.filter(function(item){ return item.category === "anti-social-behaviour"; }).length;
    var numOfBicycleTheft = crimes.filter(function(item){ return item.category === "bicycle-theft"; }).length;
    var numOfBurglary = crimes.filter(function(item){ return item.category === "burglary"; }).length;
    var numOfCriminalDamageArson = crimes.filter(function(item){ return item.category === "criminal-damage-arson"; }).length;
    var numOfDrugs = crimes.filter(function(item){ return item.category === "drugs"; }).length;
    var numOfOtherTheft = crimes.filter(function(item){ return item.category === "other-theft"; }).length;
    var numOfPossesionOfWeapons = crimes.filter(function(item){ return item.category === "possession-of-weapons"; }).length;
    var numOfPublicOrder = crimes.filter(function(item){ return item.category === "public-order"; }).length;
    var numOfRobbery = crimes.filter(function(item){ return item.category === "robbery"; }).length;
    var numOfShoplifting = crimes.filter(function(item){ return item.category === "shoplifting"; }).length;
    var numOfTheftFromThePerson = crimes.filter(function(item){ return item.category === "theft-from-the-person"; }).length;
    var numOfVehicleCrime = crimes.filter(function(item){ return item.category === "vehicle-crime"; }).length;
    var numOfViolentCrime = crimes.filter(function(item){ return item.category === "violent-crime"; }).length;
    var numOfOtherCrime = crimes.filter(function(item){ return item.category === "other-crime"; }).length;
    
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    };
    const data = [
      {
        name: "All crime",
        population: numOfAllCrime,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Anti-social behaviour",
        population: numOfAntiSocialBehaviour,
        color: "#F00",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      {
        name: "Bicycle theft",
        population: numOfBicycleTheft,
        color: "rgba(131, 167, 234, 1)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
      },
      // {
      //   name: "New York",
      //   population: 8538000,
      //   color: "#ffffff",
      //   legendFontColor: "#7F7F7F",
      //   legendFontSize: 15
      // },
      // {
      //   name: "Moscow",
      //   population: 11920000,
      //   color: "rgb(0, 0, 255)",
      //   legendFontColor: "#7F7F7F",
      //   legendFontSize: 15
      // }
    ];

  return (
    <PieChart
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor={"population"}
  backgroundColor={"transparent"}
  paddingLeft={"15"}
  center={[10, 50]}
  absolute
/>
    // <View>
      
    //   <Text>All crime {numOfAllCrime}</Text>
    //   <Text>Anti-social behaviour {numOfAntiSocialBehaviour}</Text>
    //   <Text>Bicycle theft {numOfBicycleTheft}</Text>
    //   <Text>Burglary {numOfBurglary}</Text>
    //   <Text>Criminal damage and arson {numOfCriminalDamageArson}</Text>
    //   <Text>Drugs {numOfDrugs}</Text>
    //   <Text>Other theft {numOfOtherTheft}</Text>
    //   <Text>Possession of weapons {numOfPossesionOfWeapons}</Text>
    //   <Text>Public order {numOfPublicOrder}</Text>
    //   <Text>Robbery {numOfRobbery}</Text>
    //   <Text>Shoplifting {numOfShoplifting}</Text>
    //   <Text>Theft from the person {numOfTheftFromThePerson}</Text>
    //   <Text>Vehicle crime {numOfVehicleCrime}</Text>
    //   <Text>Violence and sexual offences {numOfViolentCrime}</Text>
    //   <Text>Other crime {numOfOtherCrime}</Text>
    // </View>
  )
}

export default CrimeStatistics