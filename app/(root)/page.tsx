import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName:'Lucifer' , lastName:'MorningStar' , email:'contact@gmail.com'};
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
         <HeaderBox 
         type="greeting"
         title="Welcome"
         user={loggedIn?.firstName|| 'Guest'}
         subtext="Access and manage your account and transactions efficiently."
         />
        <TotalBalanceBox
        accounts={[]}
        totalBanks={1}
        totalCurrentBalance={2580.93}
        />
        </header> 

        RECENT TRANSICTION
        </div>  
        <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance:123.50},{currentBalance:456.78}]}
        />
    </section>
  )
}

export default Home