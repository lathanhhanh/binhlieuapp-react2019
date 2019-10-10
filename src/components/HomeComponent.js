import React, {Component} from 'react';
import {View, Text, FlatList, TouchableHighlight, StyleSheet, Image, Clipboard, Alert, ActivityIndicator} from 'react-native';

export default class HomeComponent extends Component{
    constructor(){
        super();
        this.state = {
            dataList : null,
            isLoading: true
        }
    }
    async componentDidMount(){
        try {
            const response = await fetch('http://lathanhhanh.tk/api/xekhach.php');
            const responseJson = await response.json();
            this.setState({
                isLoading: false,
                dataList: responseJson.data,
            }, function () {
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    _thongBao = (sodienthoai) => {
        Alert.alert(
            'Thông báo',
            'Sao chép '+sodienthoai+' thành công',
            [
              {
                text: 'Ok',
                onPress: () => this.props.navigation.navigate('Home'),
              },
            ],
            { cancelable: false }
          );
        Clipboard.setString(sodienthoai);
    }
    render(){
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 50, marginTop:250}}>
                <ActivityIndicator/>
              </View>
            )
          }
        const { navigation } = this.props;
        return(
            <View>
                <FlatList
                    data={this.state.dataList}
                    renderItem={({item}) => 
                    <View>
                        <TouchableHighlight onPress={
                            () => navigation.navigate('ChiTietXe', {
                                tuyenxe: item.tuyenxe, 
                                biensoxe:item.biensoxe,
                                soghexe:item.soghexe,
                                giave:item.giave,
                                thoigian1:item.thoigian1,
                                thoigian2:item.thoigian2,
                                sodienthoai:item.sodienthoai,
                                ghichu:item.ghichu
                            })}
                            onLongPress={()=> this._thongBao(item.sodienthoai)}
                        >
                            <View style={styles.container}>
                                <Image 
                                source={require('./../icons/bus.png')} 
                                style={styles.flat_img} />
                                <View style={styles.flat_view}>
                                    <Text style={{fontSize:18, color: '#00CC00', fontWeight: 'bold'}}>Bình Liêu - {item.tuyenxe}</Text>
                                    <Text style={{color:'#828282'}} >{item.biensoxe} - {item.soghexe} chỗ - {item.giave} VND</Text>
                                    <Text style={{color:'#828282'}} >{item.thoigian1} - {item.thoigian2}</Text>
                                    <Text style={{color:'#828282'}} >Điện thoại: {item.sodienthoai}</Text>
                                    <Text style={{color:'#828282'}} >{item.ghichu}</Text>
                                </View>
                            </View>
                        </TouchableHighlight>
            
                    </View>    
                    }
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        margin:2,
        flexDirection: 'row',
        height:105,
        backgroundColor: '#FFFFFF',
        borderWidth:1,
        color: '#E0EEEE'
    },
    flat_img:{
        width: 56, 
        height: 56, 
        tintColor: '#00CC00',
        marginLeft:10,
        marginTop:25
    },
    flat_view:{
        marginLeft:10,
        
    }
})