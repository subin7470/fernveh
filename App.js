/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ListItem, Header,Icon, colors} from 'react-native-elements';



const list = [
  {
    title: "I haven't received this order.",
    
  },
  {
    title: 'Items are missing from this order.',
   
  },
  {
    title: 'Items are different from what I ordered.',
    
  },
  {
    title: 'I have received bad quality product.',
    
  },
  {
    title: 'I have payment,refund,and bill related queries for this order.',
    
  },
];
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    
   // <Text>theeeeeeee</Text>
   
   <ScrollView style={styles.scrollView}>
      <Header 
      statusBarProps={{ backgroundColor:'green' }}
      
  placement="left"
  backgroundColor="green"
  leftComponent={{ icon: 'chevron-left', color: '#fff' }}
  centerComponent={{ text: 'Help & Support', style: { color: '#fff' } }}
 
/>
    
     
     
     <View> 
      {
       
        
        
list.map((item, i) => (
      <ListItem  key={i} bottomDivider>
       
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron color="black" size={25} style={styles.arrowleft} />
      </ListItem>
    ))
  }
      </View>
      </ScrollView>
   
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
    
  },
  arrowleft: {
    color:Colors.blue,
  },
 
  engine: {
    position: 'absolute',
    right: 0,
  },
 
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  
});

export default App;
