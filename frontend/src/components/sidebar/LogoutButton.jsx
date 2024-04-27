import React from 'react'
import logoutBtn from "../../assets/logout.svg"
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
    const { loading, logout } = useLogout();
    return (
        <div className='mt-auto'>
            {!loading ? (
                <button>
                    <img src={logoutBtn} alt='logout' onClick={logout} style={{ color: "white" }} />
                </button>
            ) : (
                <span className='loading loading-spinner'></span>
            )}

        </div>
    )
}

export default LogoutButton
