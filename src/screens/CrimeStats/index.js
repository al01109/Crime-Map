import { View, Text } from 'react-native'
import React from 'react'

const CrimeStatistics = (props) => {
    const crimes = props.crimes;

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
    
  return (
    <View>
      <Text>All crime {numOfAllCrime}</Text>
      <Text>Anti-social behaviour {numOfAntiSocialBehaviour}</Text>
      <Text>Bicycle theft {numOfBicycleTheft}</Text>
      <Text>Burglary {numOfBurglary}</Text>
      <Text>Criminal damage and arson {numOfCriminalDamageArson}</Text>
      <Text>Drugs {numOfDrugs}</Text>
      <Text>Other theft {numOfOtherTheft}</Text>
      <Text>Possession of weapons {numOfPossesionOfWeapons}</Text>
      <Text>Public order {numOfPublicOrder}</Text>
      <Text>Robbery {numOfRobbery}</Text>
      <Text>Shoplifting {numOfShoplifting}</Text>
      <Text>Theft from the person {numOfTheftFromThePerson}</Text>
      <Text>Vehicle crime {numOfVehicleCrime}</Text>
      <Text>Violence and sexual offences {numOfViolentCrime}</Text>
      <Text>Other crime {numOfOtherCrime}</Text>
    </View>
  )
}

export default CrimeStatistics