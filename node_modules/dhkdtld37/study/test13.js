function setColor(color = 'rosybrown') {
	return color;
}

setColor('blue');	// 'blue'
setColor();		// 'rosybrown'
setColor('');		// ''
setColor(undefined);	// 'rosybrown'
setColor(null);		// null
