import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import ExchangeCard from '../components/ExchangeCard';
import InputText from '../components/InputText';
import Pagination from '../components/Pagination';
import getExchangesData, { IExchange } from '../services/http';

const Home: NextPage = () => {
  const [exchanges, setExchanges] = useState<IExchange[]>([]);
  const [filterText, setFilterText] = useState('');
  const [filteredExchanges, setFilteredExchanges] = useState<IExchange[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getExchangesData(page).then(setExchanges);
  }, [page]);

  useEffect(() => {
    setFilteredExchanges(
      exchanges.filter((exchange: IExchange) =>
        exchange.name
          .toLocaleLowerCase()
          .includes(filterText.toLocaleLowerCase())
      )
    );
  }, [exchanges, filterText]);

  function handleButtonClick(page: any) {
    setPage(page);
  }

  return (
    <div>
      <div className="flex items-center justify-between sticky top-0 z-10 p-4 bg-white">
        <InputText onInputChange={setFilterText} />
        <Pagination
          exchanges={exchanges}
          onButtonClick={handleButtonClick}
          page={page}
        />
      </div>
      <div className="px-8">
        {filteredExchanges.map((exchange: IExchange) => {
          return <ExchangeCard key={exchange.id} exchange={exchange} />;
        })}
      </div>
    </div>
  );
};

export default Home;
