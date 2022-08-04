import { useBreachStateContext } from 'features/main/context';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const { state } = useBreachStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.email) {
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <div className='flex justify-center flex-col items-center w-screen h-screen p-8'>
      <div className='flex items-center w-full'>
        <img
          className='object-contain mr-10 h-[100px]'
          src={`${process.env.PUBLIC_URL}/Avatar.png`}
        />
        <h1 className='text-3xl tracking-widest'>{state.email}</h1>
      </div>
      <div className='w-4/5 pt-8 pl-10 h-3/5 overflow-y-auto'>
        {state.breaches?.map((val, i) => {
          return (
            <div
              key={i}
              className='flex mb-16 w-full'>
              <div className='flex-1'>
                <img
                  className='object-contain w-[100px] h-[100px]'
                  src={val.LogoPath}
                />
              </div>

              <div className='flex flex-col flex-[8]'>
                <h5 className='text-base font-bold mb-4'>{val.Title}</h5>
                <div dangerouslySetInnerHTML={{ __html: val.Description }} />
                <div className='mt-4'>
                  <label className='font-bold mr-4'>Compromise Data:</label>
                  {val?.DataClasses?.toString().replaceAll(',', ', ')}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className='py-4 px-8 self-end mt-8 mr-16 bg-[#2983A5ff] text-white cursor-pointer disabled:bg-slate-300 disabled:cursor-not-allowed disabled:text-slate-600'
        onClick={() => navigate('/')}>
        Back to previous screen
      </button>
    </div>
  );
};

export default Success;
