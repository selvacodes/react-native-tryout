import React ,{ Component } from 'react'
import styled from 'styled-components/native';

const HeaderText = styled.Text`
 fontSize: 30;
 textAlign: center;
 margin: 10px;
`

export default Header = ({ text }) =>
       <HeaderText>
            { text }
        </HeaderText>