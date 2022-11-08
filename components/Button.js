import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from "react";
import {COLORS, SIZES, FONTS, SHADOWS } from '../constants'


export const CircleButton = ( {imgUrl, handlePress, ...props}) => {
   
  return (
    <TouchableOpacity 
        style = {{ 
            width: 40,
            height: 40,
           backgroundColor: COLORS.white,
           position: 'absolute',
           borderRadius: SIZES.extraLarge,
           alignItems: 'center',
           justifyContent: 'center',
           ...SHADOWS.light,
           ...props,
           
        }}
        onPress={handlePress}
    >
        <Image 
            source = {imgUrl}
            resizeMode = "contain"
            style = {{ width: 24, height: 24 }}
        />
    </TouchableOpacity>
  )
}


export const RectButton = ({imgUrl, handlePress, ...props}) => {
    return (
      <TouchableOpacity 
        style = {{ 
            width: 40,
            height: 40,
           backgroundColor: COLORS.white,
           position: 'absolute',
           borderRadius: SIZES.extraLarge,
           alignItems: 'center',
           justifyContent: 'center',
           ...SHADOWS.light,
           ...props,
           
        }}
        onPress={handlePress}
    >
        <Image 
            source = {imgUrl}
            resizeMode = "contain"
            style = {{ position: "absolute", width: 24, height: 24, bottom: 0, right: 0}}
        />
        <Text>Place a bid</Text>
    </TouchableOpacity>
    )
  }

