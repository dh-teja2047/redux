import React from 'react';
import CustomTable from '../Table/CustomTable';

function TransformedCustomTable({ originalData }) {
    const transformedData = originalData.result.map((item) => ({
        userIdd: item.userIdd,
        pasword: item.pasword,
        email: item.email,
        city: item.city,
        contactNo: item.contactNo,
        date0fBirth: new Date(item.date0fBirth).toLocaleDateString(),
    }));

    const headers = Object.keys(transformedData[0]); 

    return <CustomTable data={transformedData} headers={headers} />;
}

export default TransformedCustomTable;
