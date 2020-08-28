import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FlexContainerColumn, FlexContainerRowSpaceBetween } from '../../../Layouts';
interface ICardOptionItemProps {
	selected: boolean;
	title: string;
	callout: string;
	secondary: string;
}

export const CardOptionItem = ({ selected, title, callout, secondary }: ICardOptionItemProps): ReactElement => {
    return (
        <CardOptionContainer selected={selected}>
            <FlexContainerColumn>
                <FlexContainerRowSpaceBetween>
                    <CardTitle>{title}</CardTitle>
                    {selected && (
                        <FontAwesomeIcon
                            icon={faCheckCircle}
                            color='hsl(159, 41.4%, 57.8%)'
                            size='2x'
                            pull='right'
                        />
                    )}
                </FlexContainerRowSpaceBetween>
                <CardCallout>{callout}</CardCallout>
                <CardSecondaryText>{secondary}</CardSecondaryText>
            </FlexContainerColumn>
        </CardOptionContainer>
    );
};

const CardOptionContainer = styled.div`
	box-sizing: border-box;
	padding: 35px 30px;
	width: 280px;
	height: 240px;
	border-radius: 5%;
	border: ${(props: { selected: boolean }): string => (props.selected ? '5px solid hsl(159, 41.4%, 57.8%)' : '5px solid white')};
	background-color: white;
	box-shadow: inset 0 0 2px #000000;
	&:hover {
	    border: 5px solid hsl(159, 41.4%, 57.8%);
	}
`;

const CardTitle = styled.p`
    font-weight: 600;
    font-size: 2rem;
    letter-spacing: .2rem;
    margin: 0;
    padding: 0;
`;

const CardCallout = styled.p`
    font-weight: 600;
    font-size: 2.5rem;
    margin-top: 40px;
    margin: 40px 0 0 0;
    padding: 0;
`;

const CardSecondaryText = styled.p`
    font-size: 1rem;
    margin-top: 20px;
    padding: 0;
    margin: 20px 0 0 0;
`;