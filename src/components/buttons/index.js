import React, {Component} from 'react';
import {merge} from 'utils/objects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

require('./buttons.scss'); 

const defClass = "button ripple ";
const defStyle = {
	display: 'inline-block',
  textTransform: 'uppercase',
};

export const BaseButton = (props) => {
	let {
		className,
		classes,
		style,
		children,
		label,
		icon,
		...otherProps
	} = props;
  
  let classNames = defClass  + classes + ' ' + className;
	let styles = (style ? merge(defStyle, style) : defStyle);
	let faicon;
  if (icon) {
  	faicon = <FontAwesomeIcon icon={icon} />;
  }
	return 	(
		<button className={classNames} style={styles} {...otherProps} ><span className="button-face">{faicon}{label || children}</span></button>
    );
}


export class FlatButton extends Component {
	render() {
		return <BaseButton classes={"flat-btn " + this.props.classes} {...this.props} />;
	}
}

export class PrimaryButton extends Component {
	render() {
		return <BaseButton classes={"raised-btn " + this.props.classes}  {...this.props} />;
	}
}


export class MenuButton extends Component {

	render() {
		return <BaseButton classes="menu-btn"  {...this.props} />;
	}
}

export class DialogButton extends Component {
	render() {
		return <BaseButton classes="dialog-btn" {...this.props} />;
	}
}