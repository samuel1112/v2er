
import React, { Component } from 'react';
import { Image } from 'react-native';

export default {
    'img': (attr)=> <Image source={{uri: attr.src.replace('http:', 'https:')}} />
};