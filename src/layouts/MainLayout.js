import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SideNav from "../components/SideNav";
import Header from "../components/Header";
import QuickView from "../components/QuickView";

export const ModalContext = createContext();

function MainLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemData, setItemData] = useState([]);

  const contextFunctions = {
    setIsModalOpen,
    setItemData
  };

  return (
    <ModalContext.Provider value={contextFunctions}>
      <MainContainer>
        <SideNav />
        <Container>
          <Header />
          {children}
        </Container>

        {isModalOpen && (
          <QuickView
            itemData={itemData}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </MainContainer>
    </ModalContext.Provider>
  );
}

const MainContainer = styled.main`
  display: flex;
  color: #444;
  font-family: sans-serif;
  height: 90vh;
`;

const Container = styled.div`
  border-left: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 24px;
  width: 80%;
`;

MainLayout.propTypes = {
  children: PropTypes.object.isRequired
};

export default MainLayout;
