import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { PieChart } from "react-native-chart-kit"
import randomColor from 'randomcolor'
import styles from './styles'

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
  legend: {
    textColor: "#333333",
    textSize: 14,
    fontFamily: "Helvetica",
  }
};

const CrimeStatistics = (props) => {
    const crimes = props.crimes;
    const screenWidth = Dimensions.get("window").width;
    const screenHeight = Dimensions.get("window").height;
    const categories = [
      { name: "Anti-social Behaviour", value: "anti-social-behaviour" },
      { name: "Bicycle Theft", value: "bicycle-theft" },
      { name: "Burglary", value: "burglary" },
      { name: "Criminal Damage Arson", value: "criminal-damage-arson" },
      { name: "Drugs", value: "drugs" },
      { name: "Other Theft", value: "other-theft" },
      { name: "Possession of Weapons", value: "possession-of-weapons" },
      { name: "Public Order", value: "public-order" },
      { name: "Robbery", value: "robbery" },
      { name: "Shoplifting", value: "shoplifting" },
      { name: "Theft from the Person", value: "theft-from-the-person" },
      { name: "Vehicle Crime", value: "vehicle-crime" },
      { name: "Violent Crime", value: "violent-crime" },
      { name: "Other Crime", value: "other-crime" },
    ];

    const data = categories.map((category) => ({
      name: category.name,
      population: crimes.filter((item) => item.category === category.value).length,
      color: randomColor(),
    }));

    const filteredData = data.filter((item) => item.population > 0);
    
  return (
    <ScrollView>
      <Text style={styles.heading}>Crime Categories</Text>
      <View style={styles.chart}>
      <PieChart
        data={filteredData}
        width={screenWidth}
        height={screenHeight * 0.3}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"white"}
      />
      </View>
      {data.map((item, index) => (
        <View key={index} style={styles.container}>
          <Text style={styles.text}>{item.name} - {item.population}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default CrimeStatistics