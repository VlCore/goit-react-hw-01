import Profile from "./Profile/Profile";
import user from "./JsonData/user.json";
import Statistics from "./Statistics/Statistics";
import data from "./JsonData/data.json";
import FriendsList from "./FriendsList/FriendsList";
import friends from "./JsonData/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./JsonData/transactions.json"

export const App = () => {
  return (
    <main>
      <Profile {...user}/>
      <Statistics title="Upload Stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory rows={transactions} />
    </main>
  );
};
