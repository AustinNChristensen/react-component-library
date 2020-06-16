import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import { Button } from '../components/Button/Button';

storiesOf('Button', module)
    .add('primary', () => (
        <>
            <Button>Primary</Button>
            <Button disabled>Primary Disabled</Button>
        </>
    ))
    .add('secondary', () => (
        <>
            <Button secondary>Secondary</Button>
        </>
    ));