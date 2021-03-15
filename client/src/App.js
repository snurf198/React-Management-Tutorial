import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
import Table from  '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  }
});

function App(props) {
  const [state, setState] = useState({
    customers: ""
  });
  
  const callApi = async () => {
    const response = await fetch('http://localhost:5000/api/customers');
    const body = await response.json();
    return body;
  }

  useEffect(()=>{
    callApi().then(res => setState({customers: res})).catch(err  => console.log(err));
  });

  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.customers ? state.customers.map(c => <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />) : ""}  
        </TableBody> 
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
