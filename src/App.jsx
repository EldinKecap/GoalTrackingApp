import './App.css';
import GoalsMenu from './components/GoalsMenu';
import GoalCreateForm from './components/GoalCreateForm';
import Layout from './components/Layout';

function App() {
  

  return (
    <>
    <Layout >
      <GoalsMenu/>
      <GoalCreateForm/>
    </Layout>
    </>
  )
}

export default App
