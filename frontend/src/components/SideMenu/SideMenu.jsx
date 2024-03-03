"use client";
import Link from "next/link";
import React from "react";
import { StyledSideMenu } from "./Sidemenu.styled";
import { FaUser } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { IoStatsChartSharp } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import { AiOutlineTransaction } from "react-icons/ai";
import { usePathname } from "next/navigation";
import useUserStore from "../../../store/userStore";



export default function SideMenu() {
  const pathname = usePathname();
     const user = useUserStore((state) => state.user);

    return (
        <StyledSideMenu>
            <div className="userInfos">
                <FaUser size={70} color="" />
                <h3>{
                    user?.prenom + " " + user?.nom
                    }</h3>
            </div>
            <ul>
                <li>
                    <MdSpaceDashboard size={20} />
                    <Link
                        href="/client"
                        className={
                            pathname === "/client" ? "activeLink" : ""
                        }
                    >
                        DashBoard
                    </Link>
                </li>
                <li>
                    <IoMdNotifications size={20} />
                    <Link href="/client/Notifications"
                        className={
                            pathname === "/client/Notifications" ? "activeLink" : ""
                        }
                    >Notifications</Link>
                </li>
                <li>
                    <AiOutlineTransaction size={20} />
                    <Link href="/client/Transactions"
                        className={
                            pathname === "/client/Transactions" ? "activeLink" : ""
                        }
                    >Transactions</Link>
                </li>
                <li>
                    <IoStatsChartSharp size={20} />
                    <Link href="/client/Statistiques"
                        className={
                            pathname === "/client/Statistiques" ? "activeLink" : ""
                        }
                    >Statistiques</Link>
                </li>
            </ul>
        </StyledSideMenu>
    );
}
