/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../../../Store/userSlice";
import { Link } from 'react-router-dom';
import "./UserMenu.css";
const UserMenu = (props) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const dispatch = useDispatch();
    const toggleDropdown = () => {
        setShowDropDown(!showDropDown);
    };
    return (
        <div onClick={toggleDropdown} className="UserMenu">
            <div className="UserMenu__control">{`${props.user?.name} `}</div>
            {showDropDown ? (
                <div className="UserMenu__dropdown">
                    {
                        props.user?.role==="admin"?
                            <div
                            className="UserMenu__dropdown_item"
                            >
                                <Link className="UserMenu__dropdown_link" to = "/admin/uploadarticle">Добавить статью</Link>
                            </div>
                        :null
                    }
                    <div
                        className="UserMenu__dropdown_item"
                        onClick={() => {
                            dispatch(logoutUser());
                        }}
                    >
                        Выйти
                    </div>
                </div>
            ) : null}
        </div>
    );
};
export default UserMenu;
