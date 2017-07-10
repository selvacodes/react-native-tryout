import React ,{ Component } from 'react'
import styled from 'styled-components/native';


const InstructionText = styled.Text`
    textAlign: center;
    color: #333333;
    marginBottom: 5px;
`

export default Instruction = ({ text }) =>
       <InstructionText>
            { text }
        </InstructionText>