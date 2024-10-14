import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home = () => {
  const loggedIn = {
    firstName: 'Koshal'
  };
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type='greeting'
            title='Welcome'
            user={loggedIn.firstName || 'Guest'}
            subtext='Access or manage your account and transactions efficiently.'
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        {/* recent transactions */}
      </div>

      {/* right sidebar */}
    </section>
  );
};

export default Home;
