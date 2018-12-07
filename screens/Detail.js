import React, {Component} from 'react';

import { StyleSheet, 
         Text,
         View ,
         TouchableHighlight,
         //Image,
        } from 'react-native';

import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';


class Detail extends Component {

    constructor(props) {
    super(props);
    }

    //===== Navigation options
  static navigationOptions= ({navigation}) =>({
     title: navigation.getParam('item').name,

  });

    //======Just rendering a list of contacts
    render() {

         let image = this.props.navigation.getParam('item').picture;
         let gender = this.props.navigation.getParam('item').gender;
         let name = this.props.navigation.getParam('item').name;
         let address = this.props.navigation.getParam('item').address;
         let gender_bool = (gender === 'female');
         let company = this.props.navigation.getParam('item').company;
         let filmName = this.props.navigation.getParam('item').filmName;

      return (<View style={styles.container}>

                <View style={styles.center}>
                  <Image style={styles.image} 
                         source={{uri:image}}
                         indicator={ProgressBar} />
                </View>

               <View style={styles.right}>
                  <Text style={styles.text}>{name}  is { gender_bool? " female":" male"}</Text>
                  <Text style={styles.text}>{ gender_bool? "She lives at ":"He lives at "}{address}</Text>
                  <Text style={styles.text}>{ gender_bool? "She works at ":"He works at "}{company}</Text>
                  <Text style={styles.text}>{ gender_bool? "Her favourite film is ":"His favourite film is "}{filmName}</Text>
               </View>


    		    </View>);
  }
}

//=========Exporting to be imported in App.js
export default Detail;


//======Styles perticular to this component
const styles =  StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal:20,
  },

  center:{
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
    height:200,
    width:200,
    margin:10,
  },
  right:{
    alignItems:'flex-start',
    margin:10
  },
  text:{
    fontSize:18,
    marginVertical:5,
  }
},
);