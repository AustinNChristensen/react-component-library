import React, { ReactElement } from 'react';
import { FlexContainerRowSpaceBetween } from '../../../Layouts';
import { CardOptionItem } from '../CardOptionItem/CardOptionItem';

export const CardOptionGroup = (): ReactElement => {
    const options = [
        {
            title: 'Free',
            callout: '1 GB',
            secondary: '$0 / mo',
            selected: false
        },
        {
            title: 'Starter',
            callout: '10 GB',
            secondary: '$5 / mo',
            selected: false
        },
        {
            title: 'Advanced',
            callout: '100 GB',
            secondary: '$50 / mo',
            selected: false
        },
        {
            title: 'Enterprise',
            callout: '1000 GB',
            secondary: '$100 / mo',
            selected: true
        }
    ];

    return (
        <FlexContainerRowSpaceBetween>
            {options.map(({ title, callout, selected, secondary }) => (
                <CardOptionItem
                    selected={selected}
                    title={title}
                    callout={callout}
                    secondary={secondary}
                />
            ))}
        </FlexContainerRowSpaceBetween>
    );
};