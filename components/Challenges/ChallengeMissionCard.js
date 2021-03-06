// @flow

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image
} from "react-native";

import styles from "../../styles/challenges/challengeMission";
import icons from "../../assets/icons";
import i18n from "../../i18n";
import PercentCircle from "../UIComponents/PercentCircle";
import GreenText from "../UIComponents/GreenText";
import missionsDict from "../../utility/dictionaries/missionsDict";

type Props = {
  +challenge: Object
};

const ChallengeMissionCard = ( { challenge }: Props ) => {
  const [missions, setMissions] = useState( [] );
  const missionNumbers = Object.keys( missionsDict[challenge.index] )
    .map( mission => missionsDict[challenge.index][mission] );

  useEffect( () => {
    const missionList = Object.keys( challenge.missions ).map(
      mission => challenge.missions[mission]
    );
    const observationsList = Object.keys( challenge.numbersObserved ).map(
      number => challenge.numbersObserved[number]
    );

    const newMissions = [];

    missionList.forEach( ( mission, i ) => {
      newMissions.push( {
        mission,
        observations: observationsList[i]
      } );
    } );

    setMissions( newMissions );
  }, [challenge] );

  const formatLongMissionText = ( text ) => {
  let newText = text;

    if ( text.includes( ";\n" ) ) {
      newText = text.replace( /-/g, "" )
        .replace( /:\n\n/g, ":\n\n\u2022 " )
        .replace( /;\n/g, ";\n\u2022 " );
    }

    return <Text style={styles.text}>{newText}</Text>;
  };

  const renderMissionText = () => missions.map( ( item, i ) => (
    <View key={`${item}${i.toString()}`} style={styles.row}>
      {missionNumbers[i] && missionNumbers[i].number === item.observations
        ? <Image source={icons.checklist} style={[styles.checklist, styles.leftItem]} />
        : <Text allowFontScaling={false} style={[styles.bullets, styles.leftItem]}>&#8226;</Text>}
      <View style={styles.textContainer}>
        {formatLongMissionText( i18n.t( item.mission ) )}
        <Text style={[styles.text, styles.greenText]}>
          {i18n.t( "challenges.number_observed_plural", { count: item.observations } )}
        </Text>
      </View>
      {i === 0 && (
        <View style={styles.circleStyle}>
          {challenge.percentComplete === 100
            ? <Image source={icons.completed} />
            : <PercentCircle challenge={challenge} />}
        </View>
      )}
    </View>
  ) );

  return (
    <View style={styles.container}>
      <GreenText text="challenges.your_mission" />
      {missions.length > 0 && renderMissionText()}
    </View>
  );
};

export default ChallengeMissionCard;
