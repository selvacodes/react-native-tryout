/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styled from 'styled-components/native';
import {
    View
} from 'react-native';

import { Header , Instruction } from './components'

const StyledView = styled.View`
  background-color: papayawhip;
  flex: 1;
  alignItems: center;
`;

export default class Home extends Component {
    render() {
        const reload = `  Double tap R on your keyboard to reload, \n 
    Shake or press menu button for dev menu`
        return (
            <StyledView>
                <Header text="Welcome to React Native!" />
                <Instruction text="To get started, edit" />
                <Instruction text={reload} />
            </StyledView>
        );
    }
}

