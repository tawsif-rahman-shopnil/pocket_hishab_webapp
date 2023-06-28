import React,{useState} from "react";
import { Modal } from "antd";
import Layout from "./../components/Layout/Layout";

const HomePage = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <Layout>
     <div className="filters">
      <div>range filters</div>
      <div>
        <button 
        className="btn btn-primary" 
        onClick={() => setShowModel(true)}
        >
          Add New
        </button>
      </div>
     </div>
     <div className="content"></div>
      <Modal title="Add Transaction"
       visible={showModel} onCancel={() => setShowModel(false)}>
      
      </Modal>     
    </Layout>
  );
};

export default HomePage;