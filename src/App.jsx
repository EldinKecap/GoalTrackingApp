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
      <GoalCalendar datesForCompletedGoals={[new Date().toISOString().slice(0,10),"2023-01-31",
"2023-02-28",
"2023-03-07",
"2023-02-15",
"2023-03-31",
"2023-04-17",
"2023-04-30",
"2023-05-31",
"2023-06-30",
"2023-07-31",
"2023-08-31",
"2023-09-30",
"2023-08-23",
"2023-09-05",
"2023-09-18",
"2023-09-19",
"2023-09-29",
"2023-10-31",
"2023-11-30",
"2023-12-31",
"2023-10-19",
"2023-10-20",
"2023-11-24",
"2023-12-06",
"2023-12-13"
]}/>
    </Layout>
    </>
  )
}

export default App
