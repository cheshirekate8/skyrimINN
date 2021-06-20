import { createContext, useContext, useState } from 'react';
import bridgeURL from '../images/bridge1.jpg'

const photos = {
    bridge: bridgeURL
}

export const PhotoContext = createContext();
export const usePhotoContext = () => useContext(PhotoContext);

export default function PhotoProvider(props) {
    const [photoType, setPhotoType] = useState("bridge");

    return (
      <PhotoContext.Provider
        value={{
          photoType,
          setPhotoType,
          photoUrl: photos[photoType]
        }}
      >
        {props.children}
      </PhotoContext.Provider>
    )
  }
