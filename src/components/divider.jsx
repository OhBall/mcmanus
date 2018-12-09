import React from 'react';

export default (props) => {
  const {
    url,
    text,
    backgroundColor="#fffbd4",
    background = "linear-gradient(to bottom, #003333, #008181)"
  } = props;

  let content;
  if (url) {
    content = <a href={url}>{text}</a>
  } else {
    content = <span>{text}</span>
  }

  const beforeStyling = {
    position: 'relative',
    left: 0,
    bottom: '-15px',
    right: 0,
    backgroundRepeat: 'repeat-x',
    height: '10px',
    backgroundSize: '20px 20px',
    backgroundImage: `radial-gradient(circle at 10px -5px, transparent 12px, ${backgroundColor} 13px)`,
    // backgroundColor: 'black',
  }
  
  const afterStyling = {
    position: 'relative',
    left: 0,
    bottom: 0,
    right: 0,
    backgroundRepeat: 'repeat-x',
    height: '15px',
    backgroundSize: '40px 20px',
    backgroundImage: `radial-gradient(circle at 10px 15px, ${backgroundColor} 12px, transparent 13px)`,
    // backgroundColor: 'black',
  }

  return(
    <div className="divider" style={{background}}>
      {content}
      <div className="wave">
        <div className="before-wave" style={beforeStyling}></div>
        <div className="after-wave" style={afterStyling}></div>
      </div>
    </div>
  );
  
};
