import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    TablePagination,
    Box,
    Button,
    Typography,
    Paper,
    TableSortLabel,
} from '@mui/material';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function CustomTable({ data, headers, title, filename }) {

    const buttonStyles = {
        backgroundColor: '#007bff',
        float:'right',
        color: '#fff', 
        padding: '8px 16px', 
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginRight: '10px', 
        size:'10px',
        width:'115px',
        height:'50px'
      };


    const tableRef = useRef(null);

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);

    const [orderBy, setOrderBy] = useState('id');
    const [order, setOrder] = useState('asc');

    const handleSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const getSortedData = () => {
        if (!Array.isArray(data)) {
            return [];
        }
    
        const sortedData = [...data]; 
    
        sortedData.sort((a, b) => {
            let comparison = 0;
            if (a[orderBy] < b[orderBy]) {
                comparison = -1;
            } else if (a[orderBy] > b[orderBy]) {
                comparison = 1;
            }
            return order === 'asc' ? comparison : -comparison; 
        });
    
        return sortedData;
    };
    

    useEffect(() => {

        if (Array.isArray(data)) {
            const sortedData = getSortedData();
            setPage(0);
        }
    }, [data]);

    const renderTableRows = () => {
        const sortedData = getSortedData();
        const startIndex = page * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
    
        return sortedData.slice(startIndex, endIndex).map((row) => (
            <TableRow key={row.id}>
                {headers.map((header) => (
                    <TableCell key={header}>{row[header]}</TableCell>
                ))}
            </TableRow>
        ));
    };
    

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const rowsPerPageOptions = [3,6,9];

    const exportPDF = () => {
        const doc = new jsPDF();

        let content = {
            head: [headers],
            body: data.map((row) => headers.map((header) => row[header])),
        };

        doc.text(title, 10, 10);
        doc.autoTable(content);
        doc.save(filename + ".pdf"); // Concatenate the string

        // doc.save('${filename}.pdf');
    };

    return (
        <Box>
            <Typography variant="h4">Welcome User</Typography>
            <TableContainer component={Paper}>
                <Table ref={tableRef}>
                    <TableHead>
                        <TableRow>
                            {headers.map((header) => (
                                <TableCell key={header}>
                                    <TableSortLabel
                                        active={orderBy === header}
                                        direction={orderBy === header ? order : 'asc'}
                                        onClick={() => handleSort(header)}
                                    >
                                        {header}
                                    </TableSortLabel>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>{renderTableRows()}</TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component="div"
                count={10}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={rowsPerPageOptions}
            />
            <DownloadTableExcel
                filename={filename}
                sheet="users"
                currentTableRef={tableRef.current}
            >
                <button style={buttonStyles}>Export excel</button>
            </DownloadTableExcel>
            <Button onClick={exportPDF} style={buttonStyles}>PDF</Button>

        </Box>
    );
}

export default CustomTable;
