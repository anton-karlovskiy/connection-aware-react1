
import React from 'react';

import { useConnectionEffectiveType } from '../../utils/hooks';
import './connection-aware-media.css';

const ConnectionAwareMedia = () => {
  const connectionEffectiveType = useConnectionEffectiveType();

  console.log('[ConnectionAwareMedia] connectionEffectiveType => ', connectionEffectiveType);

  let media;
  switch(connectionEffectiveType) {
    // case 'offline':
    //   break;
    case 'slow-2g':
      media = <img className="responsive" src="https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmin-res.jpg?v=1562842586912" alt="minimum size" />;
      break;
    case '2g':
      media = <img className="responsive" src="https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmedium-res.jpg?v=1562842587169" alt="medium size" />;
      break;
    case '3g':
      media = <img className="responsive" src="https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2Fmax-res.jpg?v=1562842587982" alt="maximum size" />;
      break;
    case '4g':
      media = <video className="responsive" src="https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2F4g-video.mp4?v=1562842601068" controls />;
      break;
    default:
      media = <video className="responsive" src="https://cdn.glitch.com/8d7fb7f0-a9be-4a8c-96c7-8af286af487e%2F4g-video.mp4?v=1562842601068" controls />;
      break;
  }

  return (
    <div className="root-frame">
      {media}
    </div>
  );
};

export default ConnectionAwareMedia;
