import Profile from "./Profile/Profile";
import user from "./JsonData/user.json"
import Statistics from "./Statistics/Statistics";
import data from "./JsonData/data.json"

export const App = () => {
  return (
    <main>
      <Profile {...user}/>
      <Statistics title="Upload Stats" stats={data} />
    </main>
  );
};
