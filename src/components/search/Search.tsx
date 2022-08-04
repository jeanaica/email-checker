import { ChangeEvent, FC, KeyboardEvent } from 'react';

type Props = {
  onSearch(): void;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
  searchString: string;
  disabled: boolean;
  error: string;
};

const Search: FC<Props> = ({
  onSearch,
  onChange,
  searchString,
  disabled,
  error,
}) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <label className='relative flex mt-8 flex-col'>
      <span className='sr-only'>Search</span>
      <div className='inline-flex'>
        <input
          className='block bg-slate-200 w-full p-2 shadow-sm focus:outline-none border border-slate-500'
          value={searchString}
          onChange={onChange}
          placeholder='Enter email address'
          type='text'
          name='search'
          disabled={disabled}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={onSearch}
          disabled={disabled || !searchString || !!error}
          className='border border-slate-500 p-4 border-l-0 disabled:bg-slate-300 disabled:cursor-not-allowed'>
          <img
            className='object-contain h-[20px]'
            src={`${process.env.PUBLIC_URL}/icons8-search.png`}
          />
        </button>
      </div>
      <span className='text-sm text-red-900'>{error}</span>
    </label>
  );
};

export default Search;
