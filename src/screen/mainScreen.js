import React,{useState} from 'react';
import { SafeAreaView, View, Text, ScrollView, StatusBar,TextInput,Keyboard,TouchableWithoutFeedback, TouchableOpacity,Image, Dimensions} from "react-native";
import ImagePicker from 'react-native-image-crop-picker';
import * as ImagePickers from "react-native-image-picker"
import {connect} from 'react-redux'
import { setProfileData } from '../store/actions'
import Icon from "react-native-vector-icons/Entypo";
import { color } from 'native-base/lib/typescript/theme/styled-system';


function MainScreen(props){

    const deviceWidth = Dimensions.get('screen').width;
    const deviceHeight = Dimensions.get('screen').height;
    const [uri,setUri]=useState("")
    const [prevUri,setPrevUri]=useState("")
    return(
      <SafeAreaView
        style={{
            width:deviceWidth,
            height:deviceHeight,
            backgroundColor:"#ffffff"
        }}
      >
          <StatusBar  hidden={true} />
            {

                uri == "" ?
                (
                    <View style={{
                        width:175,
                        height:175,
                        alignSelf:"center",
                        backgroundColor:"#efefef",
                        marginTop:220,
                        alignItems:"center",
                        justifyContent:'center',
                        borderRadius:5
                    }} > 
                        <Icon 
                            name="image" 
                            style={{
                                fontSize:75,
                                color:"#666fff"
                            }} 
                        />
                    </View>
                ):
                (
                    <View>
                        <Image 
                            style={
                                        {
                                            width:175,
                                            height:175,
                                            alignSelf:"center",
                                            backgroundColor:"#efefef",
                                            marginTop:220,
                                            alignItems:"center",
                                            justifyContent:'center',
                                            borderRadius:5
                                        }
                            }
                            source={{ uri: uri }}                 
                        />
                    </View>
                )
            }
            <Text
                style={{
                    width:"100%",
                    color:"#000000",
                    textAlign:"center",
                    marginTop:30
                }}
            >
                without cropper
            </Text>
            <View
                style={{
                    width:deviceWidth,
                    flexDirection:"row",
                    justifyContent:"space-around",
                    marginTop:10
                }}
            >
                <TouchableOpacity
                    style={{
                        width:150,
                        height:50,
                        backgroundColor:"#efefef",
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:10
                    }}
                    onPress={() => {
                        let options = {
                            storageOptions: {
                                skipBackup: true,
                                path: 'images',
                            },
                            saveToPhotos: true
                        };
                        ImagePickers.launchCamera(options, (res) => {
                        if(res.didCancel){
                                setUri(prevUri)
                        }else{
                                    // console.warn(res.assets)
                                res.assets.map((asset,index)=>{
                                    // this.setState({
                                    //     uri:asset.uri,
                                    //     pictData:asset
                                    // })
                                    setUri(asset.uri)
                                    setPrevUri(asset.uri)
                                    setProfileData(asset)
                                })
                        }
                        
                        });
                    

                    }}
                >
                    <Text
                        style={{
                            width:"100%",
                            color:"#000000",
                            textAlign:"center",
                        }}
                    >Take a picture</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width:150,
                        height:50,
                        backgroundColor:"#efefef",
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:10
                    }}
                    onPress={() => {
                        let options = {
                            storageOptions: {
                                skipBackup: true,
                                path: 'images',
                            },
                        };
                        ImagePickers.launchImageLibrary(options, (res) => {
                        if(res.didCancel){
                                setUri(prevUri)
                        }else{
                                    // console.warn(res.assets)
                                res.assets.map((asset,index)=>{
                                    // this.setState({
                                    //     uri:asset.uri,
                                    //     pictData:asset
                                    // })
                                    setUri(asset.uri)
                                    setPrevUri(asset.uri)
                                    // props.profile=asset
                                    setProfileData(asset)
                                })
                        }
                        
                        });
                    

                    }}
                >
                    <Text
                       style={{
                        width:"100%",
                        color:"#000000",
                        textAlign:"center",
                    }}
                    >Image from galery</Text>
                </TouchableOpacity>
            </View>

            <View 
                style={{
                    width:"95%",
                    height:1,
                    backgroundColor:"#efefef",
                    marginVertical:30,
                    alignSelf:"center"
                }}
            >

            </View>

            <Text
                style={{
                    width:"100%",
                    color:"#000000",
                    textAlign:"center",
                    marginTop:10
                }}
            >
                with cropper
            </Text>
            <View
                style={{
                    width:deviceWidth,
                    flexDirection:"row",
                    justifyContent:"space-around",
                    marginTop:10
                }}
            >   
                <TouchableOpacity
                    style={{
                        width:150,
                        height:50,
                        backgroundColor:"#efefef",
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:10
                    }}
                    onPress={
                        ()=>{
                            ImagePicker.openCamera({
                                cropping: true,
                                freeStyleCropEnabled:true
                              }).then(image => {
                                console.log(image);
                                console.log(uri);
                                setUri(image.path)
                                setPrevUri(image.path)
                              }).catch(
                                  e=>{
                                      console.log(e)
                                  }
                              );
                        }
                    }
                >
                    <Text
                        style={{
                            width:"100%",
                            color:"#000000",
                            textAlign:"center",
                        }}
                    >take a picture</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{
                        ImagePicker.openPicker({
                            cropping: true,
                            freeStyleCropEnabled:true
                          }).then(image => {
                            console.log(image);
                            console.log(uri);
                            setUri(image.path)
                            setPrevUri(image.path)
                          }).catch(
                              e=>{
                                  console.log(e)
                              }
                          );
                    }}
                    style={{
                        width:150,
                        height:50,
                        backgroundColor:"#efefef",
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:10
                    }}
                >
                    <Text
                        style={{
                            width:"100%",
                            color:"#000000",
                            textAlign:"center",
                        }}
                    >image from galery</Text>
                </TouchableOpacity>
            </View>
      </SafeAreaView>
    );
}

const mapStateToProps = (state)=>{
    return {
        profile: state.profile.profile
    }
}

export default connect( 
    mapStateToProps, { setProfileData }
)(MainScreen)