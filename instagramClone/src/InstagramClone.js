import React, { Component } from 'react'
import {View, Text, StyleSheet, Image } from 'react-native'

class InstagramClone extends Component {

    render(){
        return(
            <View style={{flex:1 , width: 100+'%', height: 100 + '%'}}> 
                <View style={styles.tempNav}>
                    <Image
                        style={{width: 100, height: 40}} 
                        source={{uri:"https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2013/05/InstagramLogo-730x278.png"}} />
                </View>
                <View style={styles.userBar}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image
                            style={styles.userPic} 
                            source={{uri:"https://randomuser.me/api/portraits/men/22.jpg"}} />
                        <Text style={{marginLeft: 10}}>User Test</Text>
                    </View>
                </View>
                <View>
                    <Image
                        style={{width: 100 +'%', height: 400}} 
                        source={{uri:"https://via.placeholder.com/500"}} />
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
tempNav: {
    width: 100 +'%', 
    height: 50, 
    backgroundColor: "rgb(250, 250, 250)",
    borderBottomColor: "rgb(233, 233, 233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
},
userBar: {
    width: 100 +'%', 
    height: 50, 
    backgroundColor: "rgb(250, 250, 250)",
    flexDirection:"row",
    alignItems: "center",
    marginHorizontal: 10,
    alignItems: 'stretch'
},
userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
}
})

export default InstagramClone;