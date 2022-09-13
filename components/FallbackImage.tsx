import { useEffect, useState } from 'react';
import Image from 'next/image';

export const FallbackImage = ({ src, ...rest }: { src: string }) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      className="rounded-full"
      {...rest}
      src={imgSrc ? imgSrc : '/images/not-found.png'}
      onError={() => {
        setImgSrc('/images/not-found.png');
      }}
    />
  );
};
