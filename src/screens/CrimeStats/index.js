import randomColor from 'randomcolor';
import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import {PieChart} from 'react-native-chart-kit';
import styles from './styles';
import chartConfig from './ChartConfig';

const CrimeStatistics = ({crimes}) => {
  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

  const categories = [...new Set(crimes.map(item => item.category))];

  const data = categories.map(category => ({
    name: formatName(category),
    population: crimes.filter(item => item.category === category).length,
    color: randomColor(),
  }));

  function formatName(name) {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  const filteredData = data.filter(item => item.population > 0);
  return (
    <ScrollView>
      <Text style={styles.heading}>Crime Categories</Text>
      <View style={styles.chart}>
        <PieChart
          data={filteredData}
          width={screenWidth}
          height={screenHeight * 0.3}
          chartConfig={chartConfig}
          accessor={'population'}
          backgroundColor={'white'}
        />
      </View>
      <Text style={styles.total}>{crimes.length} Crimes</Text>
      {data.map((item, index) => (
        <View key={index} style={styles.container}>
          <Text style={styles.text}>
            {item.name} - {item.population}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CrimeStatistics;
