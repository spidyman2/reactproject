import React from 'react'

export default function Alerts(prop) {

    const capitaliza = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

  return (
    prop.alert && <div>
         <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitaliza(prop.alert.type)}</strong> : {prop.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    </div>
  )
}
