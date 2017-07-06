import React from 'react';
import SvgIcon from 'material-ui/SvgIcon';

const Neutral = (props) => (
  <SvgIcon {...props} viewBox="0 0 36 36" >
    <path d="M18 .168c-9.922 0-17.965 8.06-17.965 18s8.043 18 17.965 18 17.965-8.06 17.965-18-8.043-18-17.965-18zm5.995 11.266a2.366 2.366 0 0 1 2.363 2.37 2.366 2.366 0 0 1-2.363 2.367 2.366 2.366 0 0 1-2.364-2.367 2.366 2.366 0 0 1 2.365-2.37zm-11.857 0a2.366 2.366 0 0 1 2.364 2.37 2.366 2.366 0 0 1-2.364 2.367 2.366 2.366 0 0 1-2.364-2.367 2.366 2.366 0 0 1 2.364-2.37zm12.76 14.328H11.32a1.616 1.616 0 0 1-1.62-1.617c0-.895.724-1.618 1.617-1.618H24.9c.892 0 1.615.723 1.615 1.618 0 .894-.723 1.617-1.616 1.617z" />
  </SvgIcon>
);

const VeryHappy = (props) => (
  <SvgIcon {...props} viewBox="0 0 36 36">
    <path d="M18.132 29.614a8.684 8.684 0 0 1-8.684-8.684h17.367a8.684 8.684 0 0 1-8.683 8.684m-6.006-18.348a2.368 2.368 0 1 1 0 4.737 2.368 2.368 0 0 1 0-4.737m11.88 0a2.368 2.368 0 1 1 0 4.737 2.368 2.368 0 0 1 0-4.737M18 0C8.06 0 0 8.06 0 18s8.06 18 18 18 18-8.06 18-18S27.94 0 18 0" />
  </SvgIcon>
);

const Happy = (props) => (
  <SvgIcon {...props} viewBox="0 0 36 36">
    <path d="M18 .168c-9.922 0-17.965 8.06-17.965 18s8.043 18 17.965 18 17.965-8.06 17.965-18-8.043-18-17.965-18zm5.995 11.266a2.366 2.366 0 0 1 2.363 2.37 2.366 2.366 0 0 1-2.363 2.367 2.366 2.366 0 0 1-2.364-2.367 2.366 2.366 0 0 1 2.365-2.37zm-11.857 0a2.366 2.366 0 0 1 2.363 2.37 2.366 2.366 0 0 1-2.362 2.367 2.366 2.366 0 0 1-2.364-2.367 2.366 2.366 0 0 1 2.364-2.37zm14.118 12.26c-.1.152-2.497 3.762-8.04 3.762-5.494 0-8.103-3.547-8.212-3.698a1.622 1.622 0 0 1 .37-2.26c.72-.52 1.723-.36 2.247.356.09.12 1.837 2.362 5.596 2.362 3.744 0 5.31-2.262 5.326-2.285a1.616 1.616 0 0 1 2.236-.478c.75.487.963 1.49.478 2.24z" />
  </SvgIcon>
);

const Unhappy = (props) => (
  <SvgIcon {...props} viewBox="0 0 36 36">
    <path d="M18 .168c-9.922 0-17.965 8.06-17.965 18s8.043 18 17.965 18 17.965-8.06 17.965-18-8.043-18-17.965-18zm5.995 11.266a2.366 2.366 0 0 1 2.363 2.37 2.366 2.366 0 0 1-2.363 2.367 2.366 2.366 0 0 1-2.364-2.367 2.366 2.366 0 0 1 2.365-2.37zm-11.857 0a2.366 2.366 0 0 1 2.363 2.37 2.366 2.366 0 0 1-2.362 2.367 2.366 2.366 0 0 1-2.364-2.367 2.366 2.366 0 0 1 2.364-2.37zM25.843 27.15c-.72.52-1.725.36-2.248-.356-.09-.12-1.837-2.362-5.595-2.362-3.72 0-5.273 2.208-5.337 2.302a1.6 1.6 0 0 1-1.347.733c-.303 0-.61-.085-.884-.263a1.63 1.63 0 0 1-.472-2.25c.1-.152 2.497-3.762 8.04-3.762 5.494 0 8.103 3.547 8.21 3.698.523.726.358 1.74-.367 2.26z" />
  </SvgIcon>
);

const VeryUnhappy = (props) => (
  <SvgIcon {...props} viewBox="0 0 36 36">
    <path d="M9.35 27.328a8.648 8.648 0 0 1 8.684-8.683c4.048 0 7.45 2.73 8.41 6.5.037.102.06.208.075.315.13.6.198 1.225.198 1.868H9.35zm2.776-16.062a2.368 2.368 0 1 1 0 4.737 2.368 2.368 0 0 1 0-4.737zm11.88 0a2.368 2.368 0 1 1 0 4.737 2.368 2.368 0 0 1 0-4.737zM18 0C8.06 0 0 8.06 0 18s8.06 18 18 18 18-8.06 18-18S27.94 0 18 0z" />
  </SvgIcon>
);

const moods = {1: 'Oops, something needs to change.', 2: 'Mmmmh, things should improve.',
3: 'OK… things could be better.', 4: 'Great!', 5: 'Awesome!'};

class Version extends React.Component {
  constructor(props) {
    super(props);
    this.getMood = this.getMood.bind(this);
  }

  getMood () {
    switch (this.props.version) {
    case '1':
      return <VeryUnhappy style={{color: '#F45D6F', height: '100px', width: '100px'}} />;
    case '2':
      return <Unhappy style={{color: '#F98371', height: '100px', width: '100px'}} />;
    case '3':
      return <Neutral style={{color: '#FFA76C', height: '100px', width: '100px'}} />;
    case '4':
      return <Happy style={{color: '#AEEA7E', height: '100px', width: '100px'}} />;
    case '5':
      return <VeryHappy style={{color: '#34EB7E', height: '100px', width: '100px'}} />;
    default:
      return <div />;
    }
  }

  render() {
    const moodText = moods[this.props.version];
    return (
      <div className="version" >
        <div>
          {this.getMood()}
        </div>
        <div className="version-text">
          <h4> {moodText} Thanks for the feedback! </h4>
          <div className="version-text-note" >
            Your answers will <strong>always remain anonymous</strong>
          </div>
        </div>
      </div>
    );
  }
}

export default Version;
