import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Grid, Grow } from '@material-ui/core';
import Navbar from "/src/components/Navbar/navbar.jsx";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    heading: {
      marginTop: theme.spacing(4), // Add top margin to the heading
      fontWeight: 'bold',
      fontSize: '2rem', // Default font size
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem', // Adjust font size for smaller screens
      },
    },
    serviceButton: {
        backgroundColor: '#1976d2',
        color: '#fff',
        padding: theme.spacing(1, 2),
        borderRadius: theme.shape.borderRadius,
        transition: 'background-color 0.4s ease-in-out', // Add transition for button background color
      },
      tableContainer: {
        overflow: 'flow', // Hide overflow for table container
      },
      tableRow: {
        '&:hover': {
          backgroundColor: '#c8d7eb', // Change background color on hover
          cursor: 'pointer', // Change cursor to pointer on hover
        },
      },
      tableHead: {
        backgroundColor: '#175676', // Set background color for table head
      },
      tableHeaderCell: {
        fontWeight: 'bold', // Make table header cells bold
        color: "white",
      },
      statusButton: {
        backgroundColor: '#b30f15',
        color: '#fff',
        padding: theme.spacing(1, 2),
        borderRadius: theme.shape.borderRadius,
        transition: 'background-color 0.4s ease-in-out', 
      },
    })
  );
const MaidBookings = () => {
    const classes = useStyles();
  
    // Default data using map function
    const bookings = [
      { id: 1, service: 'Cooking', status: 'Accepted', dateTime: '2024-03-01 10:00 AM', amount: '$50' },
      { id: 2, service: 'Cleaning', status: 'Completed', dateTime: '2024-03-02 03:00 PM', amount: '$70' },
      // Add more bookings as needed
    ];
  
    return (
      <div>
        <Navbar />
        <div className={classes.root}>
          <Typography variant="h1" className={classes.heading}>Bookings</Typography>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table>
              <TableHead className={classes.tableHead}>
                <TableRow>
                <TableCell className={classes.tableHeaderCell}>Service Type</TableCell>
                <TableCell className={classes.tableHeaderCell}>Date & Time</TableCell>
                <TableCell className={classes.tableHeaderCell}>Status</TableCell>
                <TableCell className={classes.tableHeaderCell}>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookings.map((booking) => (
                <Grow in={true} key={booking.id}>
                  <TableRow key={booking.id} className={classes.tableRow}>
                    <TableCell>
                      <Button className={classes.serviceButton} disableRipple>{booking.service}</Button>
                    </TableCell>
                    <TableCell>{booking.dateTime}</TableCell>
                    <TableCell >
                      <Button className={classes.statusButton} disableRipple>{booking.status}</Button>
                    </TableCell>
                    <TableCell>{booking.amount}</TableCell>
                  </TableRow>
                </Grow>
              ))}
            </TableBody>
            </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default MaidBookings;