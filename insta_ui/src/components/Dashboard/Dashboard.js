import React from 'react'
import { removeUserSession } from '../../utils/Common'

export default function Dashboard(props) {
    // handle click event of logout button
    const handleLogout = () => {
      removeUserSession();
      props.history.push("/login");
    }
 
  return (
    <div>
      Welcome User!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
