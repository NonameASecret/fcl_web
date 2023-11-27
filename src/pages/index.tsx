// src/pages/index.tsx
import React from 'react';
import { BatchForm , NavBar } from '@/components';
import Head from 'next/head';


const Home: React.FC = () => {
  const handleFormSubmit = async (data: { model: string; quantity: number; licenseLevel: number; comment: string ,date : string}) => {

    const response = await fetch('/api/batches', {  
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const resdata = await response.json();

    // check for errors
    if (response.ok) {
      alert("Success");
    }
    else{
      alert("Error: " + resdata.message);
    }
  };

  return (
    <>
      <Head>
        <title>Batch Creation Form</title>
        {/* Include global meta tags here */}
      </Head>
      <NavBar />
      <BatchForm onSubmit={handleFormSubmit} />
    </>
  );
};

export default Home;
