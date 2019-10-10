// @flow
import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView
} from "react-native";
import { NavigationEvents } from "react-navigation";
import Realm from "realm";

import realmConfig from "../../models";
import styles from "../../styles/home/footer";
import icons from "../../assets/icons";
import backgrounds from "../../assets/backgrounds";

type Props = {
  +navigation: any
}

class Footer extends Component<Props> {
  constructor() {
    super();

    this.state = {
      notifications: false
    };
  }

  toggleNotifications( status ) {
    this.setState( {
      notifications: status
    } );
  }

  fetchNotifications() {
    Realm.open( realmConfig )
      .then( ( realm ) => {
        const notifications = realm.objects( "NotificationRealm" ).filtered( "seen == false" ).length;
        if ( notifications > 0 ) {
          this.toggleNotifications( true );
        } else {
          this.toggleNotifications( false );
        }
      } ).catch( () => {
        // console.log( "[DEBUG] Failed to open realm, error: ", err );
      } );
  }

  render() {
    const { notifications } = this.state;
    const { navigation } = this.props;

    return (
      <SafeAreaView>
        <ImageBackground source={backgrounds.navBar} style={styles.container}>
          <NavigationEvents onWillFocus={() => this.fetchNotifications()} />
          <View style={[styles.navbar, styles.row]}>
            <TouchableOpacity
              hitSlop={styles.touchable}
              onPress={() => navigation.openDrawer()}
              style={styles.button}
            >
              <Image source={icons.hamburger} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate( "Camera" )}>
              <Image source={icons.cameraGreen} style={styles.cameraImage} />
            </TouchableOpacity>
            <TouchableOpacity
              hitSlop={styles.touchable}
              onPress={() => {
                if ( navigation.state ) {
                  if ( navigation.state.routeName !== "Notifications" ) {
                    navigation.navigate( "Notifications" );
                  }
                }
              }}
              style={styles.button}
            >
              {notifications
                ? <Image source={icons.notifications} />
                : <Image source={icons.notificationsInactive} />}
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default Footer;
