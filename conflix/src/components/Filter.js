import React from 'react';
import Checkbox from './Checkbox';
import styled from 'styled-components';
import { Subtitle } from './styles';

const FilterComponent = styled.div` 
    background: #4f4c4c;
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 20px;
`

const FilterWrapper = styled.div`
    height: 7em;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
`

const ProductionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const GenderWrapper = styled.div`
    
`

const Filter = props => (
    <FilterComponent>
        <Subtitle>> Filter submissions</Subtitle>
        <FilterWrapper>
            <GenderWrapper>
                <input defaultChecked type="radio" value="All" name="gender" onChange={props.handleChange} /> All
            <input type="radio" value="Male" name="gender" onChange={props.handleChange} /> Male
            <input type="radio" value="Female" name="gender" onChange={props.handleChange} /> Female
        </GenderWrapper>
            <ProductionsWrapper>
                {
                    props.interests.map((production) => {
                        return (
                            <Checkbox handleClick={props.handleCheck} {...production} />
                        )
                    })
                }
            </ProductionsWrapper>
        </FilterWrapper >
    </FilterComponent>
)

export default Filter;