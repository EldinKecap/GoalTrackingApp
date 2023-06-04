import './App.css';
import GoalsMenu from './components/GoalsMenu';
import GoalCreateForm from './components/GoalCreateForm';
import Layout from './components/Layout';
import GoalCalendar from './components/GoalCalendar';

function App() {
  

  return (
    <>
    <Layout >
      <GoalsMenu/>
      {/* <GoalCreateForm/> */}
      <GoalCalendar/>
    </Layout>
    </>
  )
}

export default App
