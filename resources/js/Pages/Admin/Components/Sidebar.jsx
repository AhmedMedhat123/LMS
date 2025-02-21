import React from 'react'
import {
    CBadge,
    CSidebar,
    CSidebarBrand,
    CSidebarHeader,
    CSidebarNav,
    CNavGroup,
    CNavItem,
    CNavTitle,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import { cilCloudDownload, cilLayers, cilPuzzle, cilSpeedometer } from '@coreui/icons'

export default function Sidebar() {
    return (
        <CSidebar className="border-end" colorScheme="dark" position="fixed">
            <CSidebarHeader className="border-bottom">
                <p className='text-2xl font-bold'>Admin Dashboard</p>
            </CSidebarHeader>
            <CSidebarNav>
                <CNavTitle>Nav Title</CNavTitle>
                <CNavItem href="#">
                    <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> Nav item
                </CNavItem>
                <CNavItem href="#">
                    <CIcon customClassName="nav-icon" icon={cilSpeedometer} /> With badge{' '}
                    <CBadge color="primary ms-auto">NEW</CBadge>
                </CNavItem>
                <CNavGroup
                    toggler={
                        <>
                            <CIcon customClassName="nav-icon" icon={cilPuzzle} /> Nav dropdown
                        </>
                    }
                >
                    <CNavItem href="#">
                        <span className="nav-icon">
                            <span className="nav-icon-bullet"></span>
                        </span>{' '}
                        Nav dropdown item
                    </CNavItem>
                    <CNavItem href="#">
                        <span className="nav-icon">
                            <span className="nav-icon-bullet"></span>
                        </span>{' '}
                        Nav dropdown item
                    </CNavItem>
                </CNavGroup>
                <CNavItem href="https://coreui.io">
                    <CIcon customClassName="nav-icon" icon={cilCloudDownload} /> Download CoreUI
                </CNavItem>
            </CSidebarNav>
        </CSidebar>
    )
}
