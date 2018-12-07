import React, {Component} from 'react';
import contacts from '../assets/contacts.json';
 
import { StyleSheet,
         Text,
         View ,
         TouchableHighlight,
         StatusBar,
         FlatList,
        } from 'react-native';
 
 
let Contacts_arr = [];
class List extends Component {
    constructor(props) {
    super(props);
      this.renderItem = this.renderItem.bind(this);
    }
 
    //assigning a key for each item of our Flatlist
    keyExtractor(item, index) {
      return `${index}`;  // must return a string here.
    }
 
    //onPress handlermto navigate to our detail screen on click of button
    onPress({item}){
      this.props.navigation.navigate('Detail',{
        item:item,
      });
    }
 
   //Each item of our Flatlist
    renderItem({item}) {
      return ( <View style={styles.row}>
            <TouchableHighlight
              onPress={()=>this.onPress({item})}
              underlayColor='#e4e4e4'>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableHighlight>
            </View>);
    }
 
    //==Creating Separator for our flatlist
    renderSeparator() {
      const style = { height: 1, backgroundColor: '#777' ,marginVertical:15};
      return <View style={style} />;
    }
 
    //===== Navigation options
    static navigationOptions={
      title: 'Contacts',
    }
 
    //======Just rendering a list of contacts
    render() {
 
    contacts.map(contact=>{
        Contacts_arr.push(contact);
      }
      );
 
      return (<View>
 
              <StatusBar barStyle="light-content"/>
 
              <FlatList
                data={Contacts_arr}
                renderItem={this.renderItem}
                keyExtractor={this.keyExtractor}
                ItemSeparatorComponent={this.renderSeparator} />
              </View>);
  }
}
 
//=========Exporting to be imported in App.js
export default List;
 
 
//======Styles perticular to this component
const styles =  StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:20,
  },
 
  row:{
    flexDirection:'row',
    margin:5
  },
 
  text:{
    fontSize:16,
  },
},
);