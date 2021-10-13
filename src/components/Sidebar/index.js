import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements';

const Sidebar = ({isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="Inicio" onClick={toggle}>
                        Inicio
                    </SidebarLink>
                    <SidebarLink to="FAQ" onClick={toggle}>
                        Preguntas Frecuentes
                    </SidebarLink>
                    <SidebarLink to="mapid" onClick={toggle}>
                        Puntos de Recolección
                    </SidebarLink>
                    <SidebarLink to="contacto" onClick={toggle}>
                        Contacto
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>    
        </SidebarContainer>
    )
}

export default Sidebar
