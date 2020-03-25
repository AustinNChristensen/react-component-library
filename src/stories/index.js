import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from '../components/Button/Button';

storiesOf("Button", module)
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
