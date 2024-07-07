import { Profile } from './Profile/Profile';
import user from '../data/user.json'; //IT IS THE DOWNLOADED JSON FORM THE TASK

import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json'; //IT IS THE DOWNLOADED JSON FORM THE TASK

import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json'; //IT IS THE DOWNLOADED JSON FORM THE TASK

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json'; //IT IS THE DOWNLOADED JSON FORM THE TASK


export const App = () => {
  return (


    //<> </> is Short Syntax for React Fragment instead of using parent element like div
     <> 
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
        
        <Statistics title="Upload Stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </>
  
    /*<div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
    */
  );

};
