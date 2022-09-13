import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IExchange } from '../services/http';

export default function ExchangeCard({ exchange }: { exchange: IExchange }) {
  const {
    image,
    name,
    year_established,
    country,
    trust_score,
    trade_volume_24h_btc,
  } = exchange;

  const [src, setSrc] = useState(image);

  useEffect(() => {
    setSrc(src);
  }, [src]);

  return (
    <div className=" bg-slate-400 rounded-lg p-4 shadow-gray-500 shadow-lg mb-6 cursor-pointer">
      <div className="flex items-center space-x-2 mb-4">
        <Image
          className="rounded-full"
          src={src}
          alt="Logo"
          width={45}
          height={45}
          onError={() => setSrc('fallbackImage.png')}
        />
        <h1 className="font-semibold text-xl">{name}</h1>
      </div>
      <div>
        <p>
          <strong>Ano de criação: </strong>
          {year_established}{' '}
        </p>
        <p>
          <strong>Pais: </strong>
          {country}
        </p>
        <p>
          <strong>Pontuação: </strong>
          {trust_score}
        </p>
        <p>
          <strong>Volume de trade (24 horas): </strong>
          {trade_volume_24h_btc.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
