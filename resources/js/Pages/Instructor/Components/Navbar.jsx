import React from 'react';
import {
    CButton,
    CContainer,
    CDropdown,
    CDropdownDivider,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CForm,
    CFormInput,
    CNavbar,
    CNavItem,
    CNavLink,
    CAvatar,
} from '@coreui/react';
import { useForm } from '@inertiajs/react';

export const Navbar = ({ instructor }) => {
    const { post, get } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('instructor.logout'));
    };

    const handleProfile = (e) => {
        e.preventDefault();
        get(route('instructor.profile'));
    };

    const handleDashboard = (e) => {
        e.preventDefault();
        get(route('instructor.dashboard'));
    };

    const handleChangePassword = (e) => {
        e.preventDefault();
        get(route('instructor.change-password'));
    };

    return (
        <CNavbar expand="lg" className="navbar">
            <CContainer fluid className="d-flex justify-content-between align-items-center">
                <CForm className="d-flex">
                    <CFormInput type="search" className="me-2" placeholder="Search" />
                    <CButton type="submit" color="primary" variant="outline">
                        Search
                    </CButton>
                </CForm>

                <div className="ms-auto d-flex align-items-center flex-nowrap gap-3 list-unstyled">
                    <CNavItem>
                        <CNavLink href="#" active>
                            Home
                        </CNavLink>
                    </CNavItem>
                    <CNavItem>
                        <CNavLink className='cursor-pointer' onClick={handleDashboard}>Dashboard</CNavLink>
                    </CNavItem>
                    <CDropdown variant="nav-item">
                        <CDropdownToggle color="secondary" className="d-flex align-items-center gap-2">
                            <CAvatar src={instructor?.photo ? `/upload/admin_images/${admin.photo}` : "/images/user_placeholder.png"} />
                            <span>{instructor?.name || "Instructor"}</span>
                        </CDropdownToggle>
                        <CDropdownMenu placement="bottom-end">
                            <CDropdownItem className='cursor-pointer' onClick={handleProfile}>Profile</CDropdownItem>
                            <CDropdownItem className='cursor-pointer' onClick={handleChangePassword}>Change Password</CDropdownItem>
                            <CDropdownItem href="#">Settings</CDropdownItem>
                            <CDropdownDivider />
                            <CDropdownItem className='cursor-pointer' onClick={handleLogout}>Logout</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                </div>
            </CContainer>
        </CNavbar>
    );
};
