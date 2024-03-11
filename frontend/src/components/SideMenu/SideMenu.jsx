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
import { RiBankCardFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import useUserStore from "../../../store/userStore";



export default function SideMenu() {
  const pathname = usePathname();
     const user = useUserStore((state) => state.user);

    return (
        <StyledSideMenu>
            <div className="userInfos">
                <FaUser size={70} color="" />
                <h3>{user?.prenom + " " + user?.nom}</h3>
            </div>
            <ul>
                {user?.etat === 1 && user.role_id === 1 ? (
                    <li>
                        <FaUser size={20} />
                        <Link
                            href="/client/AllUsers"
                            className={
                                pathname === "/client/AllUsers"
                                    ? "activeLink"
                                    : ""
                            }
                        >
                            Utilisateurs
                        </Link>
                    </li>
                ) : (
                    ""
                )}
                {user?.etat === 1 && user.role_id === 1 ? (
                    <li>
                        <AiOutlineTransaction size={20} />
                        <Link
                            href="/client/Alltransactions"
                            className={
                                pathname === "/client/Alltransactions"
                                    ? "activeLink"
                                    : ""
                            }
                        >
                            transactions
                        </Link>
                    </li>
                ) : (
                    ""
                )}
                {user?.etat === 1 && user.role_id === 1 ? (
                    <li>
                        <RiBankCardFill size={20} />
                        <Link
                            href="/client/AllAccounts"
                            className={
                                pathname === "/client/AllAccounts"
                                    ? "activeLink"
                                    : ""
                            }
                        >
                            Comptes
                        </Link>
                    </li>
                ) : (
                    ""
                )}
                {user?.etat === 1 && user.role_id === 1 ? (
                    <li>
                        <IoStatsChartSharp size={20} />
                        <Link
                            href="/client/Statistiques"
                            className={
                                pathname === "/client/Statistiques"
                                    ? "activeLink"
                                    : ""
                            }
                        >
                            Statistiques
                        </Link>
                    </li>
                ) : (
                    ""
                )}

                {/* partie user */}
                {user?.etat === 1 && user.role_id === 2 && (
                    <>
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
                            <AiOutlineTransaction size={20} />
                            <Link
                                href="/client/Transactions"
                                className={
                                    pathname === "/client/Transactions"
                                        ? "activeLink"
                                        : ""
                                }
                            >
                                Mes Transactions
                            </Link>
                        </li>
                        <li>
                            <IoStatsChartSharp size={20} />
                            <Link
                                href="/client/Statistiques"
                                className={
                                    pathname === "/client/MyStats"
                                        ? "activeLink"
                                        : ""
                                }
                            >
                                Mes Statistiques
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </StyledSideMenu>
    );
}
