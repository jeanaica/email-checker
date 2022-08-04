import instance from 'api/instance';

const get = async (email: string) => {
  const { data } = await instance.get(`/${email}?truncateResponse=false`);

  return data;
};

export default { get };
