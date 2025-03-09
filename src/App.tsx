import { useState } from "react";
import TrainerForm from "./components/TrainerForm";
import Modal from "./components/Modal";
import HeaderPage from "./components/HeaderPage";
import FooterPage from "./components/FooterPage";


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<any[]>([]);

  const handleFormSubmit = (team: any[]) => {
    setSelectedTeam(team);
    setIsModalOpen(true);
  };

  return (
    <main>
      <HeaderPage/>
      <TrainerForm onSubmit={handleFormSubmit} />
      {isModalOpen && <Modal team={selectedTeam} onClose={() => setIsModalOpen(false)} />}
      <FooterPage/>
    </main>
  );
};

export default App;


