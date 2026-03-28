import DashboardLayout from "./Components/DashboardLayout";
import DashboardCard from "./Components/DashboardCard";

function App() {
  return (
    <DashboardLayout>

      <DashboardCard
        title="Total Users"
        value="1,204"
      >
        Active users this month
      </DashboardCard>

      <DashboardCard
        title="Total Projects"
        value="48"
      >
        Projects created this year
      </DashboardCard>

      <DashboardCard
        title="Revenue"
        value="$3,200"
      >
        Last 30 days revenue
      </DashboardCard>

      <DashboardCard
        title="Active Sessions"
        value="312"
      >
        Users online right now
      </DashboardCard>

    </DashboardLayout>
  );
}

export default App;