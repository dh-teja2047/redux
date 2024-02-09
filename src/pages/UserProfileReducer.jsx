import React, { useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import CustomTable from '../Table/CustomTable';
import { getUserProfiles } from './userProfileSlice';

export default function UserProfileReducer() { 
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.profile);

  useEffect(() => {
    
    dispatch(getUserProfiles());
  }, [dispatch]); 

  return (
    <div>
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <CustomTable data={data?.data} headers={['ID Nation', 'Nation', 'ID Year', 'Year', 'Population', 'Slug Nation', 'Year']}  filename={'USA Pop'} title="USA Population"/>
      )}
    </div>
  );
}
