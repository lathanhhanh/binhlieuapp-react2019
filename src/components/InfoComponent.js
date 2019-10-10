import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class InfoComponent extends Component{
    
    render(){
        return(
            <View>
                <Text style={styles.logo}>Bình Liêu APP</Text>
                <View>
                    <Text style={styles.item}>Thông tin</Text>
                    <Text style={styles.item}>Facebook: facebook.com/lathanhhanh</Text>
                    <Text style={styles.item}>Email: lathanh4321@gmail.com</Text>
                    <Text style={styles.mota} numberOfLines={5}>Bình Liêu APP hỗ trợ tìm kiếm xe khách, tìm kiếm taxi trong địa bàn huyện Bình Liêu</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    logo:{
        fontSize:40, 
        padding:50, 
        backgroundColor:'#F2F2F2',
        color:'#00CC00',
        borderWidth: 1,
        borderColor: '#00CC00',
        alignItems: 'center'
    },
    item:{
        height: 50,
        lineHeight:50,
        borderBottomWidth:1,
        marginLeft:10,
        marginRight:10,
        fontSize: 18,
        color: '#828282',
        borderColor: '#00CC00',
    },
    mota:{
        height: 200,
        lineHeight:40,
        marginLeft:10,
        marginRight:10,
        fontSize: 18,
        color: '#828282'
    }
})