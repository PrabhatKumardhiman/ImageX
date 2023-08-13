import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className= 'text-center mt-3'>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading....</span>
            </div>

        </div>
    )
}

export default LoadingSpinner
