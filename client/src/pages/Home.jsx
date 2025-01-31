import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import useUser from '../hooks/useUser';
import EthereumBalance from '../components/eth-balance';

export default function Home() {
    const { user } = useAuth();
    const getUser = useUser()

    useEffect(() => {
        getUser()
    }, [])

    return (
        <div className='container mt-3'>
            <h2>
                <div className='row'>
                    <div className="mb-12">
                        {user?.email !== undefined ? <EthereumBalance address={user?.wallet_address}/> : 'Please login first'}
                    </div>
                </div>
            </h2>
        </div>
    )
}
