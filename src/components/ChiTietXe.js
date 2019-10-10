import React, {Component} from 'react';
import {View, Text, Linking, StyleSheet, Clipboard, Alert} from 'react-native';

export default class ChiTietXe extends Component{
    thongBao = (sodienthoai) => {
        Alert.alert(
            'Thông báo',
            'Sao chép '+sodienthoai+' thành công',
            [
              {
                text: 'Ok',
                onPress: () => this.props.navigation.navigate('ChiTietXe'),
              },
            ],
            { cancelable: false }
          );
        Clipboard.setString(sodienthoai);
    }
    render(){
        return(
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize:35,textAlign: 'center',color:'#00CC00', marginTop:20}}>Bình Liêu - {this.props.navigation.state.params.tuyenxe}</Text>
                    <Text style={{marginBottom:15, color:'#828282'}}>{this.props.navigation.state.params.ghichu}</Text>
                </View>
                <Text style={styles.hienthi}>+ Biển số : {this.props.navigation.state.params.biensoxe}</Text>
                <Text style={styles.hienthi}>+ Giá vé : 
                    {this.props.navigation.state.params.giave} - {this.props.navigation.state.params.soghexe} chỗ
                </Text>
                <Text style={styles.hienthi}>+ Tại Bình Liêu: {this.props.navigation.state.params.thoigian1}</Text>
                <Text style={styles.hienthi}>+ Bến đối lưu: {this.props.navigation.state.params.thoigian2}</Text>
                <Text onPress={() => this.thongBao(this.props.navigation.state.params.sodienthoai)} style={styles.hienthi}>+ Số điện thoại: {this.props.navigation.state.params.sodienthoai}</Text>
                <View style={styles.call}>
                    <Text style={{height:50,fontSize:20,lineHeight:50, color:'#00CC00', fontWeight:'bold'}} 
                        onPress={()=>{
                            Linking.openURL('tel:'+this.props.navigation.state.params.sodienthoai)
                            }}> ✅ Gọi ngay </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    hienthi:{
        borderBottomWidth:1,
        borderTopWidth:1,
        height:50,
        fontSize:18,
        lineHeight:50,
        margin:10,
        color: '#828282'
    },
    call:{
        borderBottomWidth:1,
        borderTopWidth:1,
        fontSize:18,
        lineHeight:50,
        margin:10,
        alignItems: 'center'
    }
})