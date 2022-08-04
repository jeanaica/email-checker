import Search from 'components/search/Search';
import { ChangeEvent, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import checkerAPI from './api';
import { useBreachStateContext } from './context';
import { BreachActions } from './types';

function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

const Main: FC = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');

  const { dispatch } = useBreachStateContext();
  const [searchString, setSearchString] = useState('');

  const navigate = useNavigate();

  const onSetSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isValidEmail(e.target.value)) {
      setError('Email is invalid');
    } else {
      setError('');
    }
    setSearchString(e.target.value);
  };

  const handleSearch = async () => {
    setIsFetching(true);
    checkerAPI
      .get(searchString)
      .then(resp => {
        dispatch({
          type: BreachActions.ADD_BREACH,
          email: searchString,
          breaches: resp,
        });
      })
      .catch(() => {
        setIsFetching(false);
      })
      .finally(() => {
        navigate('../success', { replace: false });
      });
  };

  return (
    <div className='flex justify-center flex-col items-center w-screen p-8 h-screen'>
      <div className='flex items-center w-full'>
        <img
          className='object-contain mr-10'
          src={`${process.env.PUBLIC_URL}/icons8-mail.png`}
        />
        <h1 className='text-3xl tracking-widest text-[#2983A5ff]'>
          CHECK AN EMAIL ADDRESS
        </h1>
      </div>
      <div className='w-4/5 pt-8 pl-10 h-3/5'>
        <span>
          Enter the email address below to see if it has been breached
        </span>
        <Search
          error={error}
          searchString={searchString}
          onChange={onSetSearch}
          onSearch={handleSearch}
          disabled={isFetching}
        />
      </div>
      <button
        className='py-4 px-8 self-end mt-8 bg-[#2983A5ff] text-white cursor-pointer mr-16 disabled:bg-slate-300 disabled:cursor-not-allowed disabled:text-slate-600'
        disabled={isFetching}
        onClick={() => setSearchString('')}>
        Clear
      </button>
    </div>
  );
};

export default Main;
