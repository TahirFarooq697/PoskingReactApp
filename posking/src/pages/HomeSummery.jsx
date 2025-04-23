import React from 'react';
import ReminderBar from '../Components/ReminderBar';
import GreetingMessage from '../Components/GreetingMessage';
import Overview from '../Components/Overview';
import StateSummery from '../Components/StateSummery';
import Products from '../Components/Products';
const HomeSummery = () => {
  return (
    <section className=''>
    <ReminderBar message='Dummy data will reset in every 30 minut.' title="Reminder! "/>
    <GreetingMessage geet='Good Morning!' user='Tahir Farooq'/>
    <Overview/>
     <StateSummery/>
    <Products/>
     
    </section>
  );
}

export default HomeSummery;
