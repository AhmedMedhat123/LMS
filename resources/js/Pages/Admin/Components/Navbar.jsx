import React, { useState } from 'react'
import {
    CButton,
    CCollapse,
    CContainer,
    CDropdown,
    CDropdownDivider,
    CDropdownItem,
    CDropdownMenu,
    CDropdownToggle,
    CForm,
    CFormInput,
    CNavbar,
    CNavbarBrand,
    CNavbarNav,
    CNavbarToggler,
    CNavItem,
    CNavLink,
    CAvatar,
} from '@coreui/react'

export const Navbar = () => {
    const [visible, setVisible] = useState(false)

    return (
        <CNavbar expand="lg" className="navbar">
            <CContainer fluid>
                <CNavbarToggler onClick={() => setVisible(!visible)} />
                <CCollapse className="navbar-collapse d-flex justify-content-between px-3" visible={visible}>
                    <CForm className="d-flex me-auto">
                        <CFormInput type="search" className="me-2" placeholder="Search" />
                        <CButton type="submit" color="primary" variant="outline">
                            Search
                        </CButton>
                    </CForm>
                    <CNavbarNav className="ms-auto align-items-center">
                        <CNavItem>
                            <CNavLink href="#" active>
                                Home
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#">Dashboard</CNavLink>
                        </CNavItem>
                        <CDropdown variant="nav-item">
                            <CDropdownToggle color="secondary">
                                <CAvatar color="primary" textColor="white">
                                    A
                                </CAvatar>
                            </CDropdownToggle>
                            <CDropdownMenu placement="bottom-end">
                                <CDropdownItem href="#">Profile</CDropdownItem>
                                <CDropdownItem href="#">Settings</CDropdownItem>
                                <CDropdownDivider />
                                <CDropdownItem href="#">Logout</CDropdownItem>
                            </CDropdownMenu>
                        </CDropdown>
                    </CNavbarNav>
                </CCollapse>

            </CContainer>
        </CNavbar >
    )
}
