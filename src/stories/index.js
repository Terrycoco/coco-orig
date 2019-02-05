import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { BaseButton, PrimaryButton, FlatButton, MenuButton, DialogButton } from 'components/buttons';
import { Button, Welcome } from '@storybook/react/demo';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

//BUTTONS
storiesOf('Buttons/Base Button', module)
   .add('label prop', () => <BaseButton label="Base Button" />)
   .add('children as label', () => <BaseButton>Children</BaseButton>)
   .add('style prop', () => <BaseButton label="With Style" style={{background: 'blue'}} />)
   .add('icon prop', () => <BaseButton icon="igloo" label="igloo?" />)
   .add('icon long text', () => <BaseButton icon="igloo" label="this text is much longer see" />)
;

storiesOf('Buttons/Primary Button', module)
   .add('label prop', () => <PrimaryButton label="Primary Button" />)
   .add('children as label', () => <PrimaryButton>Children</PrimaryButton>)
   .add('style prop', () => <PrimaryButton label="With Style" style={{background: 'blue'}} />)
   .add('icon prop', () => <PrimaryButton icon="igloo" label="igloo?" />)
   .add('icon long text', () => <PrimaryButton icon="igloo" label="this text is much longer see" />)
;

storiesOf('Buttons/Flat Button', module)
   .add('label prop', () => <FlatButton label="Flat Button" />)
   .add('children as label', () => <FlatButton>Children</FlatButton>)
   .add('style prop', () => <FlatButton label="With Style" style={{border: 'gray'}} />)
   .add('icon prop', () => <FlatButton icon="igloo" label="igloo?" />)
   .add('icon long text', () => <FlatButton icon="igloo" label="this text is much longer see" />)
;
storiesOf('Buttons/Menu Button', module)
   .add('label prop', () => <MenuButton label="Menu Button" />)
   .add('children as label', () => <MenuButton>Children</MenuButton>)
   .add('style prop', () => <MenuButton label="With Style" style={{border: '1px solid red'}} />)
   .add('icon prop', () => <MenuButton icon="igloo" label="igloo?" />)
   .add('icon long text', () => <MenuButton icon="igloo" label="this text is much longer see" />)
;

storiesOf('Buttons/Dialog Button', module)
   .add('label prop', () => <DialogButton label="Dialog Button" />)
   .add('children as label', () => <DialogButton>Children</DialogButton>)
   .add('style prop', () => <DialogButton label="With Style" style={{border: 'gray'}} />)
   .add('icon prop', () => <DialogButton icon="igloo" label="igloo?" />)
   .add('icon long text', () => <DialogButton icon="igloo" label="this text is much longer see" />)
;