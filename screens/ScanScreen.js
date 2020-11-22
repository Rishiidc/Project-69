import React from 'react'
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import * as Permissions from 'expo-Permissions'
import { BarCodeScnner } from 'expo-barcode-scanner'

export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }
    }

    getCameraPermissions = async () =>{
        const {status} =  await Permissions.askAsync(Permissions.CAMERA);

        this.state({
            hasCameraPermissions: status === "granted"
        });
    }

    handleBarCodeScanner = async({type,data})=>{
        this.setState({
            scnaned: true,
            scannedData: data,
            buttonState: 'normal'
        });
    }

    render() {
        const hasCameraPermissions = this.state.hasCameraPermissions;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;
        
        return (
            <View style={style.container}>
                <Text style={styleSheet.displayText}>{
                    hasCameraPermissions===true ? this.state.scannedData: "Request Camera Permisson"}
                </Text>
                <TouchableOpacity>
                    onPress={this.getCameraPermissions}
                    style={styles.ScanScreen}
                    <Text style={styles.buttonText}>Scan QR code</Text>
                </TouchableOpacity>
            </View>
        );
    }
}