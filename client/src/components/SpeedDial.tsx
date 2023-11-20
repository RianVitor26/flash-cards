import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
} from "@material-tailwind/react";
import { useContext } from "react";
import { FaPlus, FaHome } from "react-icons/fa";
import { PiCardsFill } from "react-icons/pi";
import { RiLogoutBoxFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";


export const SpeedDialWithTextOutside = () => {

    const { logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }

    const labelProps = {
        className:
            "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-bold text-gray-900 bg-blue-100 p-2 rounded-s-xl",
    };

    return (

        <div className="fixed bottom-5 right-5 rounded-">
            <SpeedDial>
                <SpeedDialHandler className="bg-blue-500 flex items-center justify-center">
                    <IconButton size="lg" className="rounded-full">
                        <FaPlus className="h-5 w-5 transition-transform group-hover:rotate-45" />
                    </IconButton>
                </SpeedDialHandler>
                <SpeedDialContent className="flex gap-y-5">
                    <Link to="/decks">
                        <SpeedDialAction className="relative">
                            <PiCardsFill className="text-4xl p-2 text-blue-500" />
                            <label {...labelProps}>Baralhos</label>
                        </SpeedDialAction>
                    </Link>
                    <Link to="/home">
                        <SpeedDialAction className="relative">
                            <FaHome className="text-4xl p-2 text-blue-500" />
                            <label {...labelProps}>Início</label>
                        </SpeedDialAction>
                    </Link>
                    <div onClick={handleLogout}>
                        <SpeedDialAction className="relative">
                            <RiLogoutBoxFill className="text-4xl p-2 text-blue-500" />
                            <label {...labelProps}>Sair</label>
                        </SpeedDialAction>
                    </div>
                </SpeedDialContent>
            </SpeedDial>
        </div>
    );
}