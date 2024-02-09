import React from 'react';
import CustomTable from './CustomTable';

function TravellersData() {
  const tableData = [
    { id: 1, name: 'ABC', country: 'USA', age: 30, visits: 20 },
    { id: 2, name: 'DEF', country: 'Armenia', age: 31, visits: 20 },
    { id: 3, name: 'GHI', country: 'UAE', age: 19, visits: 22 },
    { id: 4, name: 'JKL', country: 'UK', age: 23, visits: 32 },
    { id: 5, name: 'MNO', country: 'India', age: 32, visits: 10 },
    { id: 6, name: 'PQR', country: 'Maldives', age: 20, visits: 15 },
    { id: 7, name: 'STU', country: 'Sri Lanka', age: 25, visits: 25 },
    { id: 8, name: 'WXA', country: 'USA', age: 30, visits: 15 },
    { id: 9, name: 'MAB', country: 'UK', age: 25, visits: 20 },
  ];
  return <CustomTable data={tableData} headers={['id', 'name', 'country', 'age', 'visits']} />;

}

export default TravellersData;
