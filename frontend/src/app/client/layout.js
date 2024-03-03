"use client";

import SideMenu from "../../components/SideMenu/SideMenu";
import { StyledLayout } from "./Layout.styled";

export default function ClientLayout({
    children, 
}) {
    return <StyledLayout>
        <SideMenu />
        {children}
        </StyledLayout>;
}
