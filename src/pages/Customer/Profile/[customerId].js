import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import CustomerView from './CustomerView'

const CustomerProfile = ({ tab, invoiceData }) => {

  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12} lg={12}>
          <CustomerView />
        </Grid>

      </Grid>
    </div>
  );
};

export default CustomerProfile;
