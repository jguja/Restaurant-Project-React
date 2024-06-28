import React from 'react';
import styled from 'styled-components';
import ManageProducts from '../admin/manageProducts';

const AdminPanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const WelcomeMessage = styled.h2`
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
`;

const AdminPanel = styled.div`
    background-color: #f0f0f0;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 600px;
`;

const AdminOption = styled.div`
    margin-bottom: 15px;
    padding: 15px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
`;

const AdminHome = ({ user,mealsData }) => {
    console.log(mealsData);
    return (
        <AdminPanelWrapper>
            <WelcomeMessage>Welcome, {user}!</WelcomeMessage>
            <AdminPanel>
                <AdminOption>
                    <h3>Manage Users</h3>
                    <p>View and manage user accounts</p>
                </AdminOption>
                <AdminOption>
                    <h3>Manage Products</h3>
                    <p>Add, edit, or remove products from the inventory</p>
                    <ManageProducts mealsData={mealsData} />
                </AdminOption>
                <AdminOption>
                    <h3>View Reports</h3>
                    <p>Generate and analyze sales reports</p>
                </AdminOption>
                {/* Add more admin options as needed */}
            </AdminPanel>
        </AdminPanelWrapper>
    );
};

export default AdminHome;
