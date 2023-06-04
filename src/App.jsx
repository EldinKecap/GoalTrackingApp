import './App.css';
import GoalsMenu from './components/GoalsMenu';
import GoalCreateForm from './components/GoalCreateForm';
import Layout from './components/Layout';
import GoalCalendar from './components/GoalCalendar';

function App() {
  

  return (
    <>
    <Layout >
      {/* <GoalsMenu/> */}
      {/* <GoalCreateForm/> */}
      <GoalCalendar datesForCompletedGoals={[new Date().toISOString().slice(0,10)]}/>
    </Layout>
    </>
  )
}

export default App
